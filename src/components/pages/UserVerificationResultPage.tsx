// modules
import auth from '@/auth'
// lib
import { getUser, updateUserVerification } from '@/lib/actions/auth.actions'
import { Route, IconPath } from '@/lib/constants/paths'
import { generateUrl } from '@/lib/utils'
// components
import LogoFull from '@/components/content/Logo'
import Loader from '@/components/shared/Loader'
import RedirectWithDelay from '@/components/shared/RedirectWithDelay'
import SuccessResponse from '@/components/shared/SuccessResponse'
import FailedResponse from '@/components/shared/FailedResponse'
import LinkButton from '@/components/shared/buttons/LinkButton'
import Copyright from '@/components/content/Copyright'
import { getErrorByCode } from '@/lib/utils/errors'

type VerificationResult = {
	success: boolean
	message?: string
	code?: number
}

export default async function UserVerificationResultPage({
	searchParams,
}: {
	searchParams: SearchParams
}) {
	const { userId, secret } = searchParams
	const sessionUser = await auth.getSessionUser()
	const result = await getUser(userId as string)
	const user = result.data

	// Variables
	const successRedirectPath = sessionUser
		? generateUrl([Route.PATIENTS, sessionUser?.$id, Route.REGISTER])
		: generateUrl([Route.SIGN_IN])

	const failureRedirectPath = sessionUser
		? generateUrl([Route.DASHBOARD])
		: generateUrl([Route.SIGN_IN])

	const successMessage =
		'In a few seconds you will be able to use the full functionality of your HealthCare account.'
	const failureMessage =
		'Currently, you can only use the minimal functionality of your HealthCare account.'

	// Check if user is verified
	if (user && user.emailVerification) {
		return (
			<div className="flex h-screen max-h-screen px-[5%]">
				<div className="success-img">
					<LogoFull redirect />
					<>
						<RedirectWithDelay path={failureRedirectPath} delay={15000}>
							<p>
								Your account has already been verified, you can freely
								use the full functionality of HealthCare.
							</p>
							<p className="flex-center">
								In a few seconds you will be redirected to the&nbsp;
								<LinkButton href={failureRedirectPath} variant="text">
									{sessionUser ? 'Dashboard Page' : 'Sign In'}
								</LinkButton>
							</p>
						</RedirectWithDelay>
					</>
					<div className="my-20">
						<Loader />
					</div>
					<Copyright />
				</div>
			</div>
		)
	}

	// Make success verification account if userId and secret exist and correct
	const verificationResult: VerificationResult =
		userId && secret
			? await updateUserVerification(userId as string, secret as string)
			: { success: false }

	const success = verificationResult.success
	const errorCode = verificationResult.code

	return (
		<div className="flex h-screen max-h-screen px-[5%]">
			<div className="success-img">
				<LogoFull redirect />
				{success && (
					<>
						<p className="mt-16 text-2xl font-bold text-center">
							Welcome aboard {sessionUser?.name}!
						</p>
						<RedirectWithDelay path={successRedirectPath} delay={15000}>
							<SuccessResponse
								imageSrc={IconPath.SUCCESS_ANIM}
								entity="account"
								action="verified"
								msg={successMessage}
							/>
						</RedirectWithDelay>
					</>
				)}

				{!success && (
					<>
						<RedirectWithDelay path={failureRedirectPath} delay={15000}>
							<FailedResponse
								imageSrc={IconPath.FAILED_ANIM}
								entity="account"
								action="verified"
								msg={failureMessage}
							/>
							<p className="text-red-500">
								{errorCode
									? getErrorByCode(errorCode)
									: 'An error ocured.'}
							</p>
							<p className="flex-center">
								In a few seconds, you will be redirected to the&nbsp;
								<LinkButton href={failureRedirectPath} variant="text">
									{sessionUser ? 'Dashboard Page' : 'Sign In'}
								</LinkButton>
							</p>
						</RedirectWithDelay>
					</>
				)}
				<div className="my-20">
					<Loader />
				</div>
				<Copyright />
			</div>
		</div>
	)
}
