// modules
import auth from "@/auth"
// lib
import { getPatient } from "@/lib/actions/patient.actions"
// components
import CreatePatient from "@/components/content/dashboards/patient/CreatePatient"
import CreateAppointment from "@/components/content/dashboards/patient/CreateAppointment"
import VerifyUserRequest from "@/components/content/dashboards/patient/VerifyUserRequest"
import AppointmentsStateCard from "@/components/shared/AppointmentsStateCard"
import { Status } from "@/lib/types/enums"


export default async function PatientDashboardPage({
  params,
  sessionUser,
}: {
  params: SingleSlugParams
  sessionUser: any
}) {
  const isSessionUserVerified: boolean = await auth.checkIsSessionUserVerified()

  const { data: patient } = await getPatient(sessionUser.$id)

  return (
    <div className="flex flex-col items-center justify-center grow px-4 py-8">
      {!isSessionUserVerified && <VerifyUserRequest />}
      {isSessionUserVerified && !patient && (
        <CreatePatient sessionUser={sessionUser} />
      )}
      {isSessionUserVerified && patient && (
        <div className="flex flex-col grow w-full">
					<div className="flex gap-4 w-full">
						<AppointmentsStateCard status={Status.SCHEDULED} count={23}/>
						<AppointmentsStateCard status={Status.SCHEDULED} count={23}/>
						<AppointmentsStateCard status={Status.SCHEDULED} count={23}/>
						<AppointmentsStateCard status={Status.SCHEDULED} count={23}/>
					</div>
          <CreateAppointment sessionUser={sessionUser} />
        </div>
      )}
    </div>
  )
}
