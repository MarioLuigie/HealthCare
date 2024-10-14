// lib
import { Status } from '@/lib/types/enums'
import { capitalizeFirstLetter } from '@/lib/utils'
import { getAppointmentsOrderedByStatus } from '@/lib/actions/appointment.actions'
// components
import AppointmentsStateCard from '@/components/content/dashboards/admin/AppointmentsStateCard'
import { DataTable } from '@/components/shared/DataTable'
import { adminColumns } from '@/components/content/dashboards/admin/tables/appointmentColumns'

export default async function AdminDashboardPage({
	params,
	sessionUser,
}: {
	params: SingleSlugParams
	sessionUser: any
}) {
	const role = sessionUser.labels[0]
	const { data: appointmentsOrderedByStatus } = await getAppointmentsOrderedByStatus()

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
				<AppointmentsStateCard
					status={Status.SCHEDULED}
					count={appointmentsOrderedByStatus.scheduledCount}
				/>
				<AppointmentsStateCard
					status={Status.CANCELLED}
					count={appointmentsOrderedByStatus.cancelledCount}
				/>
				<AppointmentsStateCard
					status={Status.PENDING}
					count={appointmentsOrderedByStatus.pendingCount}
				/>
				<AppointmentsStateCard
					status={Status.FINISHED}
					count={appointmentsOrderedByStatus.finishedCount}
				/>
			</section>

			{/* Data Table */}
			<section className="w-full">
				<p className="mb-4 text-lg">Appointments List</p>
				<DataTable columns={adminColumns} data={appointmentsOrderedByStatus.documents} />
			</section>
		</div>
	)
}
