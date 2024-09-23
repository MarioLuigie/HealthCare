'use client'

// modules
import { MoreHorizontal } from 'lucide-react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { useState } from 'react'
//lib
import { Icons, StatusConfig } from '@/lib/constants'
import { ActionTypes, Status } from '@/lib/types/enums'
import {
	handleAwaitAppointment,
	handleCancelAppointment,
	handleFinishAppointment,
	handleScheduleAppointment,
} from '@/lib/handlers/appointment.handlers'
//components
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import AppointmentDialog from '@/components/dialogs/AppointmentDialog'

const StatusItem = ({
	status,
	title,
	icon,
}: {
	status: Status
	title: string
	icon: { path: string; alt: string }
}): React.ReactNode => {
	return (
		<div className="flex gap-2 items-center">
			<Image
				src={icon.path}
				width={25}
				height={25}
				alt={icon.alt}
				className="w-4"
			/>
			<p className={StatusConfig[status].textColor}>{title}</p>
		</div>
	)
}

export default function AdminDropDownMenuRow({ row }: { row: any }) {
	const params = useParams() as SingleSlugParams
	const [isAppointmentDialogOpen, setIsAppointmentDialogOpen] =
		useState<boolean>(false)
	const [actionType, setActionType] = useState<ActionTypes | null>(null)
	const appointment = row.original

	const handleOpenDialog = (type: ActionTypes) => {
		setActionType(type) // Set action type
		setIsAppointmentDialogOpen(true) // Open dialog
	}

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="h-8 w-8 p-0">
						<MoreHorizontal className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem
						onClick={() => navigator.clipboard.writeText(appointment.$id)}
						className="cursor-pointer"
					>
						Copy appointment ID
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem
						className="cursor-pointer"
						disabled={appointment.status === Status.SCHEDULED}
						onClick={() => handleOpenDialog(ActionTypes.SCHEDULE)}
					>
						<StatusItem
							status={Status.SCHEDULED}
							title="Shedule"
							icon={Icons.SCHEDULED_ICON}
						/>
					</DropdownMenuItem>
					<DropdownMenuItem
						className="cursor-pointer"
						onClick={() => handleOpenDialog(ActionTypes.CANCEL)}
						disabled={appointment.status === Status.CANCELLED}
					>
						<StatusItem
							status={Status.CANCELLED}
							title="Cancel"
							icon={Icons.CANCELLED_ICON}
						/>
					</DropdownMenuItem>
					<DropdownMenuItem
						className="cursor-pointer"
						onClick={() => handleAwaitAppointment(appointment, params)}
						disabled={appointment.status === Status.PENDING}
					>
						<StatusItem
							status={Status.PENDING}
							title="Pend"
							icon={Icons.PENDING_ICON}
						/>
					</DropdownMenuItem>
					<DropdownMenuItem
						className="cursor-pointer"
						onClick={() => handleFinishAppointment(appointment, params)}
						disabled={appointment.status === Status.FINISHED}
					>
						<StatusItem
							status={Status.FINISHED}
							title="Finish"
							icon={Icons.FINISHED_ICON}
						/>
					</DropdownMenuItem>
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
					params={params}
					isOpen={isAppointmentDialogOpen}
					handleClose={() => setIsAppointmentDialogOpen(false)}
          actionType={actionType}
				/>
			)}
		</>
	)
}
