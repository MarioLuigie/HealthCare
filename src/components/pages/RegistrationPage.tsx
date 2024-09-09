// lib
import { images } from '@/lib/constants'
import { getUser } from '@/lib/actions/user.actions'
// components
import PatientForm from '@/components/forms/PatientForm'
import PageTitle from '@/components/shared/PageTitle'
import LogoFull from '@/components/content/LogoFull'
import Copyright from '@/components/content/Copyright'
import FormPageTemplate from '@/components/shared/FormPageTemplate'

export default async function RegistrationPage({ userId }: { userId: string }) {
	const user = await getUser(userId)

	console.log('User from RegistrationPage:', user)
	return (
		<FormPageTemplate image={images.REGISTER_PAGE_IMAGE}>
			<LogoFull />
			<PageTitle
				title="Welcome !"
				description="Let us know more about yourself."
			/>
			<PatientForm user={user} />
			<Copyright />
		</FormPageTemplate>
	)
}
