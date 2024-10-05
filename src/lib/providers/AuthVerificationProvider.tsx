// modules
import { redirect } from 'next/navigation'
import auth from '@/auth'
// lib
import { generateUrl } from '@/lib/utils'
import { Route } from '@/lib/constants/paths'

export default async function AuthVerificationProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const isUserVerified = await auth.checkIsUserVerified()
	// const isUserVerified = await auth.isUserVerified()

	if (!isUserVerified) {
		redirect(generateUrl([Route.VERIFY_ACCOUNT]))
	}

	return <>{children}</> 
}
