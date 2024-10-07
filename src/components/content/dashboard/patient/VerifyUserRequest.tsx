import BasicButton from '@/components/shared/buttons/BasicButton'
import { createUserVerification } from '@/lib/actions/auth.actions'
import { Images } from '@/lib/constants'
import Image from 'next/image'

export default function VerifyUserRequest() {
	return (
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
				After clicking the button, an activation link will be sent to the
				email address provided during registration. Check your email box and
				click the link to confirm that you are the owner of the email
				account.
			</p>
			<form className="my-8" action={createUserVerification}>
				<BasicButton>Send Activation Link</BasicButton>
			</form>
		</>
	)
}
