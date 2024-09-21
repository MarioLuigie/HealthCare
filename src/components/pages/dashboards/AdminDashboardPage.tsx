// lib
import { Icons } from "@/lib/constants"
import { Status } from "@/lib/types/enums"
import { Appointment } from "@/lib/types/appwrite.types"
import { InitialCounts } from "@/lib/actions/appointment.actions"
import { capitalizeFirstLetter } from "@/lib/utils"
// components
import StateCard from "@/components/shared/StateCard"
import { getAppointmentsOrderedByStatus } from "@/lib/actions/appointment.actions"
import { DataTable } from "@/components/shared/DataTable"
import { adminColumns } from "@/components/content/tables/admin/adminColumns"

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
        <h1 className="header">
          {capitalizeFirstLetter(role)} Dashboard
        </h1>
        <p className="text-dark-700">
          Start the day with managing new appointments
        </p>
      </section>
      {/* Statuses Cards */}
      <section className="admin-stat">
        <StateCard
          status={Status.SCHEDULED}
          count={appointments.scheduledCount}
          icon={Icons.SCHEDULED_ICON}
        />
        <StateCard
          status={Status.CANCELLED}
          count={appointments.cancelledCount}
          icon={Icons.CANCELLED_ICON}
        />
        <StateCard
          status={Status.PENDING}
          count={appointments.pendingCount}
          icon={Icons.PENDING_ICON}
        />
        <StateCard
          status={Status.FINISHED}
          count={appointments.finishedCount}
          icon={Icons.FINISHED_ICON}
        />
      </section>
      {/* Data Table */}
      <section className="w-full">
        <DataTable columns={adminColumns} data={appointments.documents} />
      </section>

      {/* <div>
				<p>{role.toUpperCase()} DASHBOARD PAGE.</p>
				<p className="text-sm text-dark-600">
					{role.toUpperCase()} ID: {id}
				</p>
			</div> */}
    </div>
  )
}

{
  /* <div className="flex flex-col items-center justify-start grow p-6"></div> */
} //mainwrapper
