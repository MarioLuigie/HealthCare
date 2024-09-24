// lib
import { Status } from '@/lib/types/enums'
import { Appointment } from '@/lib/types/appwrite.types'
import { InitialCounts } from '@/lib/actions/appointment.actions'
import { capitalizeFirstLetter } from '@/lib/utils'
// components
import StateCard from '@/components/shared/StateCard'
import { getAppointmentsOrderedByStatus } from '@/lib/actions/appointment.actions'
import { DataTable } from '@/components/shared/DataTable'
import { adminColumns } from '@/components/content/tables/admin/appointmentColumns'

interface AppointmentsOrderedByStatus extends InitialCounts {
	totalCount: number
	documents: Appointment[]
}

export default async function AdminDashboardPage({
	params,
}: {
	params: SingleSlugParams
}) {
	const { role, id } = params

	const appointments: AppointmentsOrderedByStatus =
		await getAppointmentsOrderedByStatus()

	return (
		<div className="admin-main">
			{/* Dashboard introduction*/}
			<section className="w-full space-y-4">
				<h1 className="header">{capitalizeFirstLetter(role)} Dashboard</h1>
				<p className="text-dark-700">
					Start the day with managing your clinic
				</p>
			</section>

			{/* Statuses Cards */}
			<section className="admin-stat">
				<StateCard
					status={Status.SCHEDULED}
					count={appointments.scheduledCount}
				/>
				<StateCard
					status={Status.CANCELLED}
					count={appointments.cancelledCount}
				/>
				<StateCard
					status={Status.PENDING}
					count={appointments.pendingCount}
				/>
				<StateCard
					status={Status.FINISHED}
					count={appointments.finishedCount}
				/>
			</section>

			{/* Data Table */}
			<section className="w-full">
				<DataTable columns={adminColumns} data={appointments.documents} />
			</section>
		</div>
	)
}
