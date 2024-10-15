"use client"
// modules
import { MoreHorizontal } from "lucide-react"
import { useParams } from "next/navigation"
import { useState } from "react"
//lib
import { ActionTypes, Status } from "@/lib/types/enums"
import {
  handleAwaitAppointment,
  handleFinishAppointment,
} from "@/lib/handlers/appointment.handlers"
//components
import { Button } from "@/components/ui/button"
import { AppointmentStatusBadge } from "@/components/content/AppointmentStatusBadge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import AppointmentDialog from "@/components/dialogs/AppointmentDialog"

export default function AppointmentDropDownMenu({ row }: { row: any }) {
  const appointment = row.original

  const params = useParams() as SingleSlugParams

  const [isAppointmentDialogOpen, setIsAppointmentDialogOpen] =
    useState<boolean>(false)
  const [actionType, setActionType] = useState<ActionTypes>(
    ActionTypes.SCHEDULE
  )

  const handleOpenDialog = (type: ActionTypes) => {
    setActionType(type) // Set action type
    setIsAppointmentDialogOpen(true) // Open dialog
  }

  const handleCloseDialog = () => {
    setIsAppointmentDialogOpen(false)
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="shad-dropDownMenu">
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(appointment.$id)}
            className="cursor-pointer"
          >
            Copy appointment ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {(appointment.status !== Status.CANCELLED &&
            appointment.status !== Status.FINISHED) && (
            <>
              <DropdownMenuItem
                className="cursor-pointer"
                disabled={appointment.status === Status.SCHEDULED}
                onClick={() => handleOpenDialog(ActionTypes.SCHEDULE)}
              >
                <AppointmentStatusBadge status={Status.SCHEDULED} />
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => handleOpenDialog(ActionTypes.CANCEL)}
                disabled={appointment.status === Status.CANCELLED}
              >
                {/* <StatusItem status={Status.CANCELLED} /> */}
                <AppointmentStatusBadge status={Status.CANCELLED} />
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => handleAwaitAppointment(appointment)}
                disabled={appointment.status === Status.PENDING}
              >
                <AppointmentStatusBadge status={Status.PENDING} />
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => handleFinishAppointment(appointment)}
                disabled={appointment.status === Status.FINISHED}
              >
                <AppointmentStatusBadge status={Status.FINISHED} />
              </DropdownMenuItem>
            </>
          )}
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            View appointment details
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            View patient details
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Appointment Dialog */}
      {isAppointmentDialogOpen && (
        <AppointmentDialog
          appointment={appointment}
          isOpen={isAppointmentDialogOpen}
          handleCloseDialog={handleCloseDialog}
          actionType={actionType}
        />
      )}
    </>
  )
}
