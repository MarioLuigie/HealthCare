// modules
import auth from '@/auth'
import Image from 'next/image'
// lib
import { createUserVerification } from '@/lib/actions/auth.actions'
import { generateUrl } from '@/lib/utils'
import { Route } from '@/lib/constants/paths'
// components
import BasicButton from '@/components/shared/buttons/BasicButton'
import LinkButton from '@/components/shared/buttons/LinkButton'
import { Images } from '@/lib/constants'

export default async function PatientDashboardPage({
	params,
}: {
	params: SingleSlugParams
}) {
	const { role, id } = params
	const isSessionUserVerified: boolean =
		await auth.checkIsSessionUserVerified()
	const sessionUser = await auth.getSessionUser()
	// const patient = await getPatient(sessionUser.userId) or (sessionUser.$id)
	// LinkButton with create patient profile action visible when patient not exist

	return (
		<div className="flex flex-col items-center justify-center grow p-4">
			{isSessionUserVerified && (
				<div className="flex flex-col items-center gap-6">
					<Image
						src={Images.PATIENT_CREATE_IMAGE.path}
						alt={Images.PATIENT_CREATE_IMAGE.alt}
						width={500}
						height={500}
					/>
					<p className="text-green-400 text-5xl font-bold text-center">
						Create your Patient Profile!
					</p>
					<p className="max-w-[500px] text-center text-dark-600 text-xs">
						Once you have created your patient profile, you will be able
						to create and manage your appointments with our doctors.
					</p>
					<div className="flex-center mt-8">
						<LinkButton
							href={generateUrl([
								Route.PATIENTS,
								sessionUser.$id,
								Route.REGISTER,
							])}
							variant="fill"
						>
							Create Patient Profile
						</LinkButton>
					</div>
				</div>
			)}
			{!isSessionUserVerified && sessionUser && (
				<>
					<Image
						src={Images.USER_NOT_VERIFIED_IMAGE.path}
						alt={Images.USER_NOT_VERIFIED_IMAGE.alt}
						width={320}
						height={320}
					/>
					<div className="text-dark-500 text-6xl font-bold">
						User not verified
					</div>
					<p className="max-w-[500px] text-center text-dark-600 text-xs">
						After clicking the button, an activation link will be sent to
						the email address provided during registration. Check your
						email box and click the link to confirm that you are the owner
						of the email account.
					</p>
					<form className="my-8" action={createUserVerification}>
						<BasicButton>Send Activation Link</BasicButton>
					</form>
				</>
			)}
		</div>
	)
}
