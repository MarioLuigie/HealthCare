// modules
import auth from '@/auth'
// lib
import { getPatient } from '@/lib/actions/patient.actions'
// components
import CreatePatient from '@/components/content/dashboards/patient/CreatePatient'
import CreateAppointment from '@/components/content/dashboards/patient/CreateAppointment'
import VerifyUserRequest from '@/components/content/dashboards/patient/VerifyUserRequest'
import Card from '@/components/shared/Card'

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
		<div className="flex flex-col items-center justify-center grow">
			{/* User not verified */}
			{!isSessionUserVerified && <VerifyUserRequest />}

			{/* User verified but Patient not created*/}
			{isSessionUserVerified && !patient && (
				<CreatePatient sessionUser={sessionUser} />
			)}

			{/* User verified and Patient created - create appointment*/}
			{isSessionUserVerified && patient && (
				<div className="flex flex-col grow w-full">
					<div className="flex gap-4 w-full">
						<Card
							title="User Info"
							className="grow bg-card border border-border p-4"
						>
							<div></div>
						</Card>
						<Card
							title="User Info"
							className="grow bg-card border border-border p-4"
						>
							<div></div>
						</Card>
					</div>
					<CreateAppointment sessionUser={sessionUser} />
				</div>
			)}
		</div>
	)
}
