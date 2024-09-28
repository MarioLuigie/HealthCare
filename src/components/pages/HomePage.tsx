// modules
import Link from 'next/link'
// lib
import { Images } from '@/lib/constants'
import { Route } from '@/lib/constants/paths'
import { generateUrl } from '@/lib/utils'
import { SearchParamsString } from '@/lib/types/enums'
// components
import PageTitle from '@/components/shared/PageTitle'
// import UserForm from '@/components/forms/UserForm'
import LogoFull from '@/components/content/LogoFull'
import Copyright from '@/components/content/Copyright'
import FormPageTemplate from '@/components/shared/FormPageTemplate'
import PassKeyDialog from '@/components/dialogs/PassKeyDialog'

export default function HomePage({
	searchParams,
}: {
	searchParams?: SearchParams
}) {
	{
		/* TODO: OTP Verification | PassKey Modal  */
	}

	return (
		<FormPageTemplate image={Images.HOME_PAGE_IMAGE} classes="max-w-[480px]">
			<PassKeyDialog searchParams={searchParams} />
			<LogoFull />
			<PageTitle
				title="Hi there !"
				description="Get started with appointments."
				classes="my-12"
			/>
			{/* <UserForm /> */}
			<Copyright>
				<Link
					href={generateUrl([Route.HOME], {
						admin: SearchParamsString.TRUE,
					})}
					className="text-green-500"
				>
					Admin
				</Link>
			</Copyright>
		</FormPageTemplate>
	)
}
