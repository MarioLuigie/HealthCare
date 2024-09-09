// modules
import Image from 'next/image'
// lib
import { images } from '@/lib/constants'
import { getUser } from '@/lib/actions/user.actions'
// components
import PatientForm from '@/components/forms/PatientForm'
import PageTitle from '@/components/shared/PageTitle'
import LogoFull from '@/components/content/LogoFull'
import Copyright from '@/components/content/Copyright'
import FormPageTemplate from '@/components/shared/FormPageTemplate'

export default async function NewAppointmentPage({
	userId,
}: {
	userId: string
}) {
	const user = await getUser(userId)

	console.log('User from RegistrationPage:', user)
	return (
		<FormPageTemplate image={images.NEW_APPOINTMENT_PAGE_IMAGE}>
			<LogoFull />
			<PageTitle
				title="Welcome !"
				description="Request a new appointment in 10s."
			/>

			<Copyright />
		</FormPageTemplate>
	)
}
