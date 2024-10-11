// modules
import auth from '@/auth'
// lib
import { getPatient } from '@/lib/actions/patient.actions'
// components
import CreatePatient from '@/components/content/dashboard/patient/CreatePatient'
import CreateAppointment from '@/components/content/dashboard/patient/CreateAppointment'
import VerifyUserRequest from '@/components/content/dashboard/patient/VerifyUserRequest'

export default async function PatientDashboardPage({
	params,
	sessionUser,
}: {
	params: SingleSlugParams
	sessionUser: any
}) {
	const isSessionUserVerified: boolean =
		await auth.checkIsSessionUserVerified()

	const { data: patient } = await getPatient(sessionUser.$id)

	return (
		<div className="flex flex-col items-center justify-center grow p-4">
			{!isSessionUserVerified && <VerifyUserRequest />}
			{isSessionUserVerified && !patient && (
				<CreatePatient sessionUser={sessionUser} />
			)}
			{patient && <CreateAppointment sessionUser={sessionUser} />}
		</div>
	)
}
