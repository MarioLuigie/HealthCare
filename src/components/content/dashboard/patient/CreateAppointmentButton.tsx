'use client'
// modules
import React, { useState } from 'react'
// components
import BasicButton from '@/components/shared/buttons/BasicButton'
import GeneralDialog from '@/components/dialogs/GeneralDialog'
import AppointmentForm from '@/components/forms/AppointmentForm'
import { ActionTypes } from '@/lib/types/enums'

type CreateAppointmentButtonProps = {
	children: React.ReactNode
	sessionUser: any
}

export default function CreateAppointmentButton({
	children,
	sessionUser,
}: CreateAppointmentButtonProps) {
	const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

	const handleOpenDialog = () => {
		setIsDialogOpen(true) // Open dialog
	}

	const handleCloseDialog = () => {
		setIsDialogOpen(false) // close dialog
	}

	return (
		<>
			<BasicButton variant="fill" onClick={handleOpenDialog}>
				{children}
			</BasicButton>
			{isDialogOpen && (
				<GeneralDialog
					handleCloseDialog={handleCloseDialog}
					isOpen={isDialogOpen}
					header
					title="Create Appointment"
					description="Fill the form below and create your appointment with selected doctor in 10 seconds."
				>
					<div className="w-full max-w-3xl">
						<AppointmentForm userId={sessionUser.$id} actionType={ActionTypes.CREATE} handleCloseDialog={handleCloseDialog}/>
					</div>
				</GeneralDialog>
			)}
		</>
	)
}
