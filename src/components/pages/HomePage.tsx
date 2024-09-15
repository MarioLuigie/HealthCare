// modules
import Link from 'next/link'
// lib
import { Images } from '@/lib/constants'
// components
import PageTitle from '@/components/shared/PageTitle'
import UserForm from '@/components/forms/UserForm'
import LogoFull from '@/components/content/LogoFull'
import Copyright from '@/components/content/Copyright'
import FormPageTemplate from '@/components/shared/FormPageTemplate'
import { Route } from '@/lib/constants/paths'
import { generateUrl } from '@/lib/utils'
import PassKeyDialog from '@/components/dialogs/PassKeyDialog'

export default function HomePage({
	admin
}: {
	admin: string
}) {
	{
		/* TODO: OTP Verification | PassKey Modal  */
	}

	const isAdmin = admin === 'true'

	return (
		<FormPageTemplate image={Images.HOME_PAGE_IMAGE}>
			{isAdmin && <PassKeyDialog />}
			<LogoFull />
			<PageTitle
				title="Hi there !"
				description="Get started with appointments."
			/>
			<UserForm />
			<Copyright>
				<Link
					href={generateUrl([Route.HOME], { admin: 'true' })}
					className="text-green-500"
				>
					Admin
				</Link>
			</Copyright>
		</FormPageTemplate>
	)
}
