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
import LinkButton from '../shared/buttons/LinkButton'
import { generateUrl } from '@/lib/utils'
import { Route } from '@/lib/constants/paths'

export default async function CreateAppointmentPage({
	params,
}: {
	params: SingleSlugParams
}) {
	const userId = params.userId
	const result = await getPatient(userId)

	return (
		<FormPageTemplate
			image={Images.NEW_APPOINTMENT_PAGE_IMAGE}
			classes="max-w-[780px]"
		>
			<LogoFull />
			<PageTitle
				title="New appointment"
				description="Request a new appointment in 10 seconds"
				classes="my-12"
			/>
			<div className="pb-10">
				<LinkButton href={generateUrl([Route.DASHBOARD_PATIENT, userId])}>
					Skip and fill form later
				</LinkButton>
			</div>
			<AppointmentForm
				actionType={ActionTypes.CREATE}
				userId={userId}
				patientId={result?.data?.$id}
			/>
			<Copyright />
		</FormPageTemplate>
	)
}
