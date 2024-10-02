//lib
import auth from '@/auth'
import FailedRes from '@/components/shared/FailedRes'
import { IconPath } from '@/lib/constants/paths'

export default async function AuthVerificationProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const isUserVerified = await auth.isUserVerified()

	if (isUserVerified) {
		return children
	} else {
		return (
			<FailedRes
				imageSrc={IconPath.FAILED_ANIM}
				entity="account"
				action="verified"
				msg="Currently, you can only use the minimal functionality of your HealthCare account. Open your dashboard below."
			/>
		)
	}
}
