"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Appointment } from '@/lib/types/appwrite.types'
import { TableCells, TableColumns } from '@/lib/types/enums'
import { MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { StatusBadge } from "@/components/shared/StatusBadge"
import PersonAvatar from "../PersonAvatar"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

export const columns: ColumnDef<Appointment>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const appointment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Your Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(appointment.$id)}
              className="cursor-pointer"
            >
              Copy appointment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">View patient</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">View appointment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  {
    cell: ({ row }) => <p>{row.index + 1}</p>,
    header: TableColumns.NUMBER,
  },
  {
    accessorKey: TableCells.APPOINTMENT_STATUS,
    header: TableColumns.STATUS,
    cell: ({ row }) => <StatusBadge status={row.original.status} />
  },
  {
    accessorKey: TableCells.PATIENT_NAME,
    header: TableColumns.NAME,
  },
  {
    accessorKey: TableCells.PATIENT_EMAIL,
    header: TableColumns.EMAIL,
  },
  {
    accessorKey: TableCells.PATIENT_PHONE,
    header: TableColumns.PHONE,
  },
  // !! Check PersonAvatar - Create Doctor object, Doctor Collection and make relationship to patient
  {
    accessorKey: TableCells.APPOINTMENT_PRIMARY_PHYSICIAN,
    header: TableColumns.PRIMARY_PHYSICIAN,
    // cell: ({ row }) => <PersonAvatar person={row.original.primaryPhysician} />,
  },
  {
    accessorKey: TableCells.APPOINTMENT_SCHEDULE,
    header: TableColumns.SCHEDULE,
  },
  {
    accessorKey: TableCells.APPOINTMENT_REASON,
    header: TableColumns.REASON,
  },
]
