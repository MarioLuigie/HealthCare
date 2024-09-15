'use client'

// modules
import { useState } from 'react'
import { useRouter } from 'next/navigation'
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
import { Icons } from '@/lib/constants'
import { generateUrl } from '@/lib/utils'
import { Route } from '@/lib/constants/paths'

export default function PassKeyDialog() {
  const router = useRouter()
	const [isOpen, setIsOpen] = useState<boolean>(true)

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
						<div onClick={closeDialog} className='cursor-pointer'>
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
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction>Continue</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
