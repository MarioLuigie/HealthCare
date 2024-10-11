'use client'
// modules
import React, { useState } from 'react'
// components
import BasicButton from '@/components/shared/buttons/BasicButton'
import GeneralDialog from '@/components/dialogs/GeneralDialog'
import PatientForm from '@/components/forms/PatientForm'

type CreatePatientButtonProps = {
	children: React.ReactNode
	sessionUser: any
}

export default function CreatePatientButton({
	children,
	sessionUser,
}: CreatePatientButtonProps) {
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
					isLogo
					isHeader
					title="Create Patient Profile"
					description="Fill the form below and create your patient profile. Once you have created your profile, you will be able to set up your first appointment with a doctor."
				>
					<div className="w-full max-w-3xl">
						<PatientForm user={sessionUser} handleCloseDialog={handleCloseDialog}/>
					</div>
				</GeneralDialog>
			)}
		</>
	)
}
