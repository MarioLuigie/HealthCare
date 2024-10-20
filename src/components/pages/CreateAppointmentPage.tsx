// lib
import { Images } from '@/lib/constants'
// components
import AppointmentForm from '@/components/forms/AppointmentForm'
import PageTitle from '@/components/shared/PageTitle'
import LogoFull from '@/components/content/Logo'
import Copyright from '@/components/content/Copyright'
import FormPageTemplate from '@/components/shared/FormPageTemplate'
import { ActionTypes } from '@/lib/types/enums'
import LinkButton from '../shared/buttons/LinkButton'
import { generateUrl } from '@/lib/utils'
import { Route } from '@/lib/constants/paths'
import auth from '@/auth'

export default async function CreateAppointmentPage({
	params,
}: {
	params: SingleSlugParams
}) {
	const sessionUser = await auth.getSessionUser()
	const userId = sessionUser?.$id

	return (
		<FormPageTemplate
			image={Images.NEW_APPOINTMENT_PAGE_IMAGE}
			classes="max-w-[780px]"
		>
			<LogoFull redirect />
			<PageTitle
				title="New appointment"
				description="Request a new appointment in 10 seconds"
				classes="my-12"
			/>
			<div className="pb-10">
				<LinkButton href={generateUrl([Route.DASHBOARD])}>
					Skip and fill form later
				</LinkButton>
			</div>
			<AppointmentForm
				actionType={ActionTypes.CREATE}
				userId={userId}
			/>
			<Copyright />
		</FormPageTemplate>
	)
}
