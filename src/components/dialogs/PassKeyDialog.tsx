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

	const handleChangePassKey = (value: string) => {
		setPassKey(value)
		setError('')
	}

	const validatePassKey = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault()
		if (passKey === '123456') {
			setPassKey('')

			// !!Only to test!!
			setTimeout(() => {
				router.push('/?isOk=ok')
			}, 1000)

		} else {
			setError('Invalid passkey, try again.')
		}
	}

	const closeDialog = () => {
		setIsOpen(false)
		router.push(generateUrl([Route.HOME]))
	}

	return (
		<AlertDialog open={isOpen} onOpenChange={setIsOpen}>
			<AlertDialogContent className="shad-alert-dialog">
				<AlertDialogHeader>
					<div className="flex justify-end mb-1">
						<Image
							src={Icons.CLOSE_ICON.path}
							alt={Icons.CLOSE_ICON.alt}
							width={25}
							height={25}
							onClick={closeDialog}
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
						onChange={(value) => handleChangePassKey(value)}
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
					{error && (
						<p className="shad-error text-14-regular mt-6 flex justify-center">
							{error}
						</p>
					)}
				</div>
				<AlertDialogFooter className="gap-3">
					<AlertDialogAction
						onClick={(e) => validatePassKey(e)}
						className="shad-primary-btn w-full mb-2"
					>
						Enter admin passkey
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
