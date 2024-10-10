"use client"
// components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import PatientForm from "@/components/forms/PatientForm"

type PatientDialogProps = {
  handleCloseDialog: () => void
  isOpen: boolean
  user: any
}

export default function PatientDialog({
  handleCloseDialog,
  isOpen,
  user,
}: PatientDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={handleCloseDialog}>
      <DialogContent className="shad-dialog sm:msx-w-md">
        <DialogHeader className="mb-4 space-y-3">
          <DialogTitle className="mb-4">
            Create Patient Profile
          </DialogTitle>
          <DialogDescription>
            Fill the form below and create your patient profile. Once you have created your profile, you will be able to set up your first appointment with a doctor.
          </DialogDescription>
        </DialogHeader>
        <PatientForm
          user={user}
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
