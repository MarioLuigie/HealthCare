"use client"
// components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type GeneralDialogProps = {
  handleCloseDialog: () => void
  isOpen: boolean
  children: React.ReactNode
}

export default function GeneralDialog({
  handleCloseDialog,
  isOpen,
  children,
}: GeneralDialogProps) {
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
        {children}
      </DialogContent>
    </Dialog>
  )
}
