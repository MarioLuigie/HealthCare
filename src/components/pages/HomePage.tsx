// modules
import Link from 'next/link'
// lib
import { images } from '@/lib/constants'
// components
import PageTitle from '@/components/shared/PageTitle'
import UserForm from '@/components/forms/UserForm'
import LogoFull from '@/components/content/LogoFull'
import Copyright from '@/components/content/Copyright'
import FormPageTemplate from '@/components/shared/FormPageTemplate'

export default function HomePage() {
	{
		/* TODO: OTP Verification | PassKey Modal  */
	}
	return (
		<FormPageTemplate image={images.HOME_PAGE_IMAGE}>
			<LogoFull />
			<PageTitle
				title="Hi there !"
				description="Get started with appointments."
			/>
			<UserForm />
			<Copyright>
				<Link href="/?admin=true" className="text-green-500">
					Admin
				</Link>
			</Copyright>
		</FormPageTemplate>
	)
}
