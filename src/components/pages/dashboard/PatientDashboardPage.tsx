// modules
import auth from '@/auth'
// lib
import { getPatient } from '@/lib/actions/patient.actions'
// components
import CreatePatient from '@/components/content/dashboard/patient/CreatePatient'
import CreateAppointment from '@/components/content/dashboard/patient/CreateAppointment'
import VerifyUserRequest from '@/components/content/dashboard/patient/VerifyUserRequest'
import AppointmentDialog from '@/components/dialogs/AppointmentDialog'

export default async function PatientDashboardPage({
	params,
	sessionUser,
}: {
	params: SingleSlugParams
	sessionUser: any
}) {
	const isSessionUserVerified: boolean =
		await auth.checkIsSessionUserVerified()

	const { data: patient } = await getPatient('66f9aea2003c91bccb49')

	// LinkButton with create patient profile action visible when patient not exist

	return (
		<div className="flex flex-col items-center justify-center grow p-4">
			{patient && <CreateAppointment sessionUser={sessionUser} />}
			{isSessionUserVerified && !patient && (
				<CreatePatient sessionUser={sessionUser} />
			)}
			{!isSessionUserVerified && <VerifyUserRequest />}
		</div>
	)
}
