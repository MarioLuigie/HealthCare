import StateCard from "@/components/shared/StateCard"
import { Icons } from "@/lib/constants"
import { IconPath } from "@/lib/constants/paths"
import { Status } from "@/lib/types/enums"

export default function AdminDashboardPage({
  params,
}: {
  params: SingleSlugParams
}) {
  const { role, id } = params
  return (
    <div className="flex flex-col items-center justify-start grow p-6">
      <section className="admin-stat bg-red-500">
        <StateCard
          status={Status.SCHEDULED}
          count={5}
          label={`${Status.SCHEDULED} Appointments`}
          icon={Icons.APPOINTMENTS_ICON}
        />
        <StateCard
          status={Status.PENDING}
          count={5}
          label={`${Status.PENDING} Appointments`}
          icon={Icons.APPOINTMENTS_ICON}
        />
        <StateCard
          status={Status.CANCELLED}
          count={5}
          label={`${Status.CANCELLED} Appointments`}
          icon={Icons.APPOINTMENTS_ICON}
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
