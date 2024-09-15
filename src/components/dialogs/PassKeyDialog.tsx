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
	AlertDialogCancel,
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

	const closeDialog = () => {
		setIsOpen(false)
		router.push(generateUrl([Route.HOME]))
	}

	return (
		<AlertDialog open={isOpen} onOpenChange={setIsOpen}>
			<AlertDialogContent className="shad-alert-dialog">
				<AlertDialogHeader>
					<AlertDialogTitle className="flex items-start justify-between">
						Admin Access Verification
						<div onClick={closeDialog} className="cursor-pointer">
							<Image
								src={Icons.CLOSE_ICON.path}
								alt={Icons.CLOSE_ICON.alt}
								width={25}
								height={25}
							/>
						</div>
					</AlertDialogTitle>
					<AlertDialogDescription>
						To access the admin dashboard please enter the passkey.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<div>
					<InputOTP
						maxLength={6}
						value={passKey}
						onChange={(value) => setPassKey(value)}
					>
						<InputOTPGroup className="shad-otp-group">
							<div className="shad-otp">
								<InputOTPSlot className="shad-otp-slot" index={0} />
								<InputOTPSlot className="shad-otp-slot" index={1} />
								<InputOTPSlot className="shad-otp-slot" index={2} />
							</div>
							<div className="shad-otp">
								<InputOTPSlot className="shad-otp-slot" index={3} />
								<InputOTPSlot className="shad-otp-slot" index={4} />
								<InputOTPSlot className="shad-otp-slot" index={5} />
							</div>
						</InputOTPGroup>
					</InputOTP>
				</div>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction>Continue</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
