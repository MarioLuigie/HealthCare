'use client'

//modules
import { useState } from 'react'
// components
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
// lib
import { Appointment } from '@/lib/types/appwrite.types'

type AppointmentDialogProps = {
	children: React.ReactNode
	appointment: Appointment
	params: SingleSlugParams
}

export default function AppointmentDialog({
	children,
	appointment,
	params,
}: AppointmentDialogProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete
						your account and remove your data from our servers.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
