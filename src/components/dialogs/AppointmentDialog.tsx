"use client"
// lib
import { Appointment } from "@/lib/types/appwrite.types"
// import {
//   handleCancelAppointment,
//   handleScheduleAppointment,
// } from "@/lib/handlers/appointment.handlers"
import { ActionTypes } from "@/lib/types/enums"
import { capitalizeFirstLetter } from "@/lib/utils"
// components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import AppointmentForm from "@/components/forms/AppointmentForm"

type AppointmentDialogProps = {
  appointment: Appointment
  handleCloseDialog: () => void
  isOpen: boolean
  actionType: ActionTypes
  userId?: string
}

export default function AppointmentDialog({
  appointment,
  handleCloseDialog,
  isOpen,
  actionType,
  userId,
}: AppointmentDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseDialog}>
      <DialogContent className="shad-dialog sm:msx-w-md">
        <DialogHeader className="mb-4 space-y-3">
          <DialogTitle className="mb-4">
            {capitalizeFirstLetter(actionType)}
            {" Appointment"}
          </DialogTitle>
          <DialogDescription>
            {actionType === ActionTypes.CANCEL &&
              `This action cannot be undone. This will permanently cancel
						this appointment. You will need to create a new appointment.`}
            {actionType === ActionTypes.SCHEDULE &&
              `This action will schedule this appointment. Additionally, you can change the details of this appointment.`}
          </DialogDescription>
        </DialogHeader>
        <AppointmentForm
          userId={appointment.patient.userId || userId}
          actionType={actionType}
          appointment={appointment}
          handleCloseDialog={handleCloseDialog}
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
