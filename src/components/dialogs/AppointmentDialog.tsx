'use client'
// modules
import clsx from 'clsx'
// lib
import { Appointment } from '@/lib/types/appwrite.types'
import {
	handleCancelAppointment,
	handleScheduleAppointment,
} from '@/lib/handlers/appointment.handlers'
import { ActionTypes } from '@/lib/types/enums'
import { capitalizeFirstLetter, createButtonLabel } from '@/lib/utils'
// components
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import AppointmentForm from '@/components/forms/AppointmentForm'

type AppointmentDialogProps = {
	appointment: Appointment
	params: SingleSlugParams
	handleClose: () => void
	isOpen: boolean
	actionType: ActionTypes
}

export default function AppointmentDialog({
	appointment,
	params,
	handleClose,
	isOpen,
	actionType,
}: AppointmentDialogProps) {
	
	const handleConfirm = async () => {
		if (actionType === ActionTypes.SCHEDULE) {
			await handleScheduleAppointment(appointment, params)
			handleClose()
		} else if (actionType === ActionTypes.CANCEL) {
			await handleCancelAppointment(appointment, params)
			handleClose()
		}
	}

	return (
		<Dialog open={isOpen} onOpenChange={handleClose}>
			<DialogContent className="shad-dialog sm:msx-w-md">
				<DialogHeader className="mb-4 space-y-3">
					<DialogTitle className='mb-4'>
						{capitalizeFirstLetter(actionType)}
						{' Appointment'}
					</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete
						your account and remove your data from our servers.
					</DialogDescription>
				</DialogHeader>
				<AppointmentForm 
					userId={appointment.patient.userId}
					patientId={appointment.patient.$id}
					actionType={actionType}
				/>
				{/* <Button
					variant="outline"
					onClick={handleConfirm}
					className={clsx(
						actionType === ActionTypes.CANCEL
							? 'shad-danger-btn'
							: 'shad-primary-btn'
					)}
				>
					{createButtonLabel(actionType, 'Appointment')}
				</Button> */}
			</DialogContent>
		</Dialog>
	)
}
