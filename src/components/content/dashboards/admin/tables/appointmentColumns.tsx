'use client'

// modules
import { ColumnDef } from '@tanstack/react-table'
// lib
import { Appointment } from '@/lib/types/appwrite.types'
import { Roles, TableCells, TableColumns } from '@/lib/types/enums'
import { truncateText } from '@/lib/utils/index'
// components
import { StatusBadge } from '@/components/shared/StatusBadge'
import AppointmentManipulation from '@/components/content/dashboards/manipulations/AppointmentDropDownMenu'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

export const adminColumns: ColumnDef<Appointment>[] = [
	{
		header: 'Actions',
		id: 'actions',
		cell: ({ row }) => {
			const appointment = row.original
			return <AppointmentManipulation row={row} />
		},
	},
	{
		cell: ({ row }) => <p>{row.index + 1}</p>,
		header: TableColumns.NUMBER,
	},
	{
		accessorKey: TableCells.APPOINTMENT_STATUS,
		header: TableColumns.STATUS,
		cell: ({ row }) => <StatusBadge status={row.original.status} badge/>,
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
		cell: ({ row }) => <p>Dr. {row.original.primaryPhysician}</p>,
	},
	{
		accessorKey: TableCells.APPOINTMENT_SCHEDULE,
		header: TableColumns.SCHEDULE,
	},
	{
		accessorKey: TableCells.APPOINTMENT_REASON,
		header: TableColumns.REASON,
		cell: ({ row }) => <p>{truncateText(row.original.reason, 7)}</p>,
	},
]
