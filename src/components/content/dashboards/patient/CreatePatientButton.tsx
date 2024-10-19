'use client'
// modules
import React, { useState } from 'react'
// components
import BasicButton from '@/components/shared/buttons/BasicButton'
import GeneralDialog from '@/components/dialogs/GeneralDialog'
import PatientForm from '@/components/forms/PatientForm'
import { Plus } from 'lucide-react'

type CreatePatientButtonProps = {
	children: React.ReactNode
	sessionUser: any
	plus?: boolean
	variant?: 'text' | 'fill' | 'outline'
}

export default function CreatePatientButton({
	children,
	sessionUser,
	plus,
	variant,
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
			<BasicButton variant={variant} onClick={handleOpenDialog}>
			{plus && <Plus size={18} className='mr-[2px]'/>}
				{children}
			</BasicButton>
			{isDialogOpen && (
				<GeneralDialog
					handleCloseDialog={handleCloseDialog}
					isOpen={isDialogOpen}
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
