'use client'

// modules
import { useState } from 'react'
import { useRouter } from 'next/navigation'
// lib
import { Icons } from '@/lib/constants'
import { generateUrl } from '@/lib/utils'
import { Route } from '@/lib/constants/paths'
// components
import Image from 'next/image'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogOverlay,
} from '@/components/ui/alert-dialog'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from '@/components/ui/input-otp'

export default function PassKeyDialog() {
	const router = useRouter()

	const [isOpen, setIsOpen] = useState<boolean>(true)
	const [passKey, setPassKey] = useState<string>('')
	const [error, setError] = useState<string>('')

	const handleChange = (value: string) => {
		setPassKey(value)
		setError('')
	}

	const handleClose = () => {
		setIsOpen(false)
		router.push(generateUrl([Route.HOME]))
	}

	const handleValidate = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault()
		if (passKey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
			setPassKey('')

			// !!Only for test!!
			setTimeout(() => {
				router.push('/?isOk=ok')
			}, 1000)
		} else {
			setError('Invalid passkey, try again.')
		}
	}

	return (
		<AlertDialog open={isOpen} onOpenChange={setIsOpen}>
			<AlertDialogOverlay onClick={handleClose}>
				<AlertDialogContent
					className="shad-alert-dialog"
					onClick={(e) => e.stopPropagation()}
				>
					<AlertDialogHeader>
						<div className="flex justify-end mb-1">
							<Image
								src={Icons.CLOSE_ICON.path}
								alt={Icons.CLOSE_ICON.alt}
								width={25}
								height={25}
								onClick={handleClose}
								className="cursor-pointer"
							/>
						</div>
						<AlertDialogTitle className="flex items-start justify-center xs:justify-start text-[24px]">
							Admin Access Verification
						</AlertDialogTitle>
						<AlertDialogDescription className="flex items-start justify-center xs:justify-start">
							To access the admin dashboard please enter the passkey.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<div className="mb-2 mt-8">
						<InputOTP
							maxLength={6}
							value={passKey}
							onChange={(value) => handleChange(value)}
						>
							<InputOTPGroup className="shad-otp-group">
								<div className="shad-otp">
									<InputOTPSlot className="shad-otp-slot" index={0} />
									<InputOTPSlot className="shad-otp-slot" index={1} />
									<InputOTPSlot className="shad-otp-slot" index={2} />
								</div>
								<InputOTPSeparator />
								<div className="shad-otp">
									<InputOTPSlot className="shad-otp-slot" index={3} />
									<InputOTPSlot className="shad-otp-slot" index={4} />
									<InputOTPSlot className="shad-otp-slot" index={5} />
								</div>
							</InputOTPGroup>
						</InputOTP>
						<div className="h-[30px] flex items-end justify-center">
							{error && (
								<p className="shad-error text-14-regular text-center">
									{error}
								</p>
							)}
						</div>
					</div>
					<AlertDialogFooter className="gap-3">
						<AlertDialogAction
							onClick={(e) => handleValidate(e)}
							className="shad-primary-btn w-full mb-2 hover:bg-red-500"
						>
							Enter admin passkey
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	)
}
