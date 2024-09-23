'use client'
// components
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
// lib
import { Appointment } from '@/lib/types/appwrite.types'
import {
	handleCancelAppointment,
	handleScheduleAppointment,
} from '@/lib/handlers/appointment.handlers'
import { Button } from '@/components/ui/button'
import { ActionTypes, Status } from '@/lib/types/enums'

type AppointmentDialogProps = {
	appointment: Appointment
	params: SingleSlugParams
	handleClose: () => void
	isOpen: boolean
	actionType: ActionTypes | null
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

  const setButtonText = () => {
    switch (actionType) {
      case ActionTypes.SCHEDULE:
        return 'Schedule Appointment'
      case ActionTypes.CANCEL:
        return 'Cancel Appointment'
    }
  }

	return (
		<Dialog open={isOpen} onOpenChange={handleClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete
						your account and remove your data from our servers.
					</DialogDescription>
				</DialogHeader>
				<Button variant="outline" onClick={handleConfirm}>
					{setButtonText()}
				</Button>
			</DialogContent>
		</Dialog>
	)
}
