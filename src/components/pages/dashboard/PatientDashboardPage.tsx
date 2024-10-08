// modules
import auth from '@/auth'
import Image from 'next/image'
// lib
import { createUserVerification } from '@/lib/actions/auth.actions'
import { generateUrl } from '@/lib/utils'
import { Route } from '@/lib/constants/paths'
import { getPatient } from '@/lib/actions/patient.actions'
// components
import BasicButton from '@/components/shared/buttons/BasicButton'
import LinkButton from '@/components/shared/buttons/LinkButton'
import { Images } from '@/lib/constants'
import CreatePatient from '@/components/content/dashboard/patient/CreatePatient'
import CreateAppointment from '@/components/content/dashboard/patient/CreateAppointment'
import AppointmentDialog from '@/components/dialogs/AppointmentDialog'
import VerifyUserRequest from '@/components/content/dashboard/patient/VerifyUserRequest'

export default async function PatientDashboardPage({
	params,
	sessionUser,
}: {
	params: SingleSlugParams
	sessionUser: any
}) {
	// const { role, id } = params
	const isSessionUserVerified: boolean =
		await auth.checkIsSessionUserVerified()

	// const sessionUser = await auth.getSessionUser()
	const { data: patient } = await getPatient('66f9aea2003c91bccb49+')

	console.log('***SESSION USER FROM PATIENT DASHBOARD', sessionUser)
	console.log('***PATIENT FROM PATIENT DASHBOARD', patient)

	// LinkButton with create patient profile action visible when patient not exist
	if (!sessionUser) {
		return null
	}

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
