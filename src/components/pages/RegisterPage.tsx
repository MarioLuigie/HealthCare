// lib
import { Images } from '@/lib/constants'
import { getUser } from '@/lib/actions/user.actions'
// components
import PatientForm from '@/components/forms/PatientForm'
import PageTitle from '@/components/shared/PageTitle'
import LogoFull from '@/components/content/LogoFull'
import Copyright from '@/components/content/Copyright'
import FormPageTemplate from '@/components/shared/FormPageTemplate'

export default async function RegistrationPage({ params }: { params: SingleSlugParams}) {
	const userId = params.userId
	const user = await getUser(userId)

	console.log('User from RegistrationPage:', user)
	return (
		<FormPageTemplate image={Images.REGISTER_PAGE_IMAGE} classes='max-w-[780px]'>
			<LogoFull />
			<PageTitle
				title="Welcome !"
				description="Here you can create your patient profile, from which you will be able to create and manage your appointments to your chosen doctors"
				classes='my-12'
			/>
			<PatientForm user={user} />
			<Copyright />
		</FormPageTemplate>
	)
}
