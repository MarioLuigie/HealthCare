// lib
import { images } from '@/lib/constants'
import { getPatient } from '@/lib/actions/patient.actions'
// components
import AppointmentForm from '@/components/forms/AppointmentForm'
import PageTitle from '@/components/shared/PageTitle'
import LogoFull from '@/components/content/LogoFull'
import Copyright from '@/components/content/Copyright'
import FormPageTemplate from '@/components/shared/FormPageTemplate'
import { ActionTypes } from '@/lib/types/enums'

export default async function NewAppointmentPage({
	userId,
}: {
	userId: string
}) {
	const patient = await getPatient(userId)

	return (
		<FormPageTemplate image={images.NEW_APPOINTMENT_PAGE_IMAGE}>
			<LogoFull />
			<PageTitle
				title="New appointment !"
				description="Request a new appointment in 10 seconds."
			/>
			<AppointmentForm
				actionType={ActionTypes.CANCEL}
				userId={userId}
				patientId={patient.$id}
			/>
			<Copyright />
		</FormPageTemplate>
	)
}
