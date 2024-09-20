"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Appointment } from '@/lib/types/appwrite.types'
import { TableCells, TableColumns } from '@/lib/types/enums'

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
    accessorKey: TableCells.APPOINTMENT_STATUS,
    header: TableColumns.STATUS,
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
  {
    accessorKey: TableCells.APPOINTMENT_PRIMARY_PHYSICIAN,
    header: TableColumns.PRIMARY_PHYSICIAN,
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
