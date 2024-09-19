// lib
import { Icons } from "@/lib/constants"
import { Status } from "@/lib/types/enums"
import { Appointment } from '@/lib/types/appwrite.types'
// components
import StateCard from "@/components/shared/StateCard"
import { getAppointments } from "@/lib/actions/appointment.actions"

function countAppointments(appointments: Appointment[]) {
	console.log("APPOINTMENTS", appointments)
}

export default async function AdminDashboardPage({
  params,
}: {
  params: SingleSlugParams
}) {
  const { role, id } = params

	const appointments = await getAppointments()

	countAppointments(appointments)
	
  return (
    <div className="flex flex-col items-center justify-start grow p-6">
      <section className="admin-stat">
        <StateCard
          status={Status.SCHEDULED}
          count={5}
          label={`${Status.SCHEDULED} Appointments`}
          icon={Icons.SCHEDULED_ICON}
        />
        <StateCard
          status={Status.PENDING}
          count={52}
          label={`${Status.PENDING} Appointments`}
          icon={Icons.PENDING_ICON}
        />
        <StateCard
          status={Status.CANCELLED}
          count={15}
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
