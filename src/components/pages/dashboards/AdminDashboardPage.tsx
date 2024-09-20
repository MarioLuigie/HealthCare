// lib
import { Icons } from "@/lib/constants"
import { Status } from "@/lib/types/enums"
import { Appointment } from "@/lib/types/appwrite.types"
// components
import StateCard from "@/components/shared/StateCard"
import { getAppointmentsOrderedByStatus } from "@/lib/actions/appointment.actions"

function countAppointments(
  appointments: Appointment[],
  status: Status
): number {
  if (!appointments || !status) {
    return 0
  }

  const validStatuses = [Status.SCHEDULED, Status.PENDING, Status.CANCELLED]

  if (!validStatuses.includes(status)) {
    console.warn(`Invalid status provided: ${status}`)
    return 0
  }

  return appointments.filter((appointment) => appointment.status === status)
    .length
}

export default async function AdminDashboardPage({
  params,
}: {
  params: SingleSlugParams
}) {
  const { role, id } = params

  const appointments = await getAppointmentsOrderedByStatus()

  return (
    <div className="flex flex-col items-center justify-start grow p-6">
      <section className="admin-stat">
        <StateCard
          status={Status.SCHEDULED}
          count={countAppointments(appointments, Status.SCHEDULED)}
          label={`${Status.SCHEDULED} Appointments`}
          icon={Icons.SCHEDULED_ICON}
        />
        <StateCard
          status={Status.PENDING}
          count={countAppointments(appointments, Status.PENDING)}
          label={`${Status.PENDING} Appointments`}
          icon={Icons.PENDING_ICON}
        />
        <StateCard
          status={Status.CANCELLED}
          count={countAppointments(appointments, Status.CANCELLED)}
          label={`${Status.CANCELLED} Appointments`}
          icon={Icons.CANCELLED_ICON}
        />
      </section>
      <div>
        <p>{role.toUpperCase()} DASHBOARD PAGE.</p>
        <p className="text-sm text-dark-600">
          {role.toUpperCase()} ID: {id}
        </p>
      </div>
    </div>
  )
}
