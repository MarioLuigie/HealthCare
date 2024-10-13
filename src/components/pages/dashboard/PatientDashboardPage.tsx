// modules
import auth from "@/auth"
// lib
import { getPatient } from "@/lib/actions/patient.actions"
// components
import CreatePatient from "@/components/content/dashboard/patient/CreatePatient"
import CreateAppointment from "@/components/content/dashboard/patient/CreateAppointment"
import VerifyUserRequest from "@/components/content/dashboard/patient/VerifyUserRequest"
import StateCard from "@/components/shared/StateCard"
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
						<StateCard status={Status.SCHEDULED} count={23}/>
						<StateCard status={Status.SCHEDULED} count={23}/>
						<StateCard status={Status.SCHEDULED} count={23}/>
					</div>
          <CreateAppointment sessionUser={sessionUser} />
        </div>
      )}
    </div>
  )
}
