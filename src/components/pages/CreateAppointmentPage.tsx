// lib
import { Images } from '@/lib/constants'
import { getPatient } from '@/lib/actions/patient.actions'
// components
import AppointmentForm from '@/components/forms/AppointmentForm'
import PageTitle from '@/components/shared/PageTitle'
import LogoFull from '@/components/content/LogoFull'
import Copyright from '@/components/content/Copyright'
import FormPageTemplate from '@/components/shared/FormPageTemplate'
import { ActionTypes } from '@/lib/types/enums'

export default async function CreateAppointmentPage({
	params,
}: {
	params: SingleSlugParams
}) {
	const userId = params.userId
	const result = await getPatient(userId)

	return (
		<FormPageTemplate image={Images.NEW_APPOINTMENT_PAGE_IMAGE} classes='max-w-[780px]'>
			<LogoFull />
			<PageTitle
				title="New appointment"
				description="Request a new appointment in 10 seconds"
				classes='my-12'
			/>
			<AppointmentForm
				actionType={ActionTypes.CREATE}
				userId={userId}
				patientId={result?.data?.$id}
			/>
			<Copyright />
		</FormPageTemplate>
	)
}
