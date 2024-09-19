// lib
import { Icons } from "@/lib/constants"
import { Status } from "@/lib/types/enums"
// components
import StateCard from "@/components/shared/StateCard"

export default function AdminDashboardPage({
  params,
}: {
  params: SingleSlugParams
}) {
  const { role, id } = params
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
