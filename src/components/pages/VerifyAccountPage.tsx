// modules
import { redirect } from 'next/navigation'
// lib
import { verifyAccount } from '@/lib/actions/auth.actions'
// components
import Loader from '@/components/shared/Loader'
import RedirectWithDelay from '@/components/shared/RedirectWithDelay'
import { generateUrl, prepareSearchParam } from '@/lib/utils'
import { Route, IconPath } from '@/lib/constants/paths'
import Copyright from '@/components/content/Copyright'
import LogoFull from '@/components/content/LogoFull'
import SuccessRes from '@/components/shared/SuccessRes'
import FailedRes from '@/components/shared/FailedRes'

import auth from '@/auth'

export default async function VerifyAccountPage({
	searchParams,
}: {
	searchParams: SearchParams
}) {
	const { userId, secret } = searchParams
	const { success } = await verifyAccount(userId as string, secret as string)

	const { name } = await auth.getSessionUser()

	return (
		<div className=" flex h-screen max-h-screen px-[5%]">
			<div className="success-img">
				<LogoFull />
				<p className="mt-16 text-2xl font-bold">Welcome aboard {name} !</p>
				<SuccessRes
					imageSrc={IconPath.SUCCESS_ANIM}
					entity="account"
					action="verified"
					msg="In a few seconds you will be able to use the full functionality of your HealthCare account."
				/>
				<FailedRes
					imageSrc={IconPath.FAILED_ANIM}
					entity="account"
					action="verified"
					msg="Currently, you can only use the minimal functionality of your HealthCare account."
				/>
				<div className="my-20">
					<Loader />
				</div>
				<Copyright />
			</div>
		</div>
	)
}

// 	return (
// 		<div className="flex flex-col items-center justify-center min-h-screen grow">
// 			<Loader />
// 			{true && (
// 				<RedirectWithDelay
// 					path={generateUrl([Route.SIGN_IN])}
// 					delay={60000}
// 				>
// 					<p className='text-5xl font-bold text-green-500'>Your account has been successfully verified!</p>
// 					<p>
// 						You will be able to use the full functionality of your
// 						HealthCare account shortly.
// 					</p>
// 				</RedirectWithDelay>
// 			)}
// 			{(false) && (
// 				<p>Invalid verification link. Please, try again.</p>
// 			)}
// 		</div>
// 	)
// }
