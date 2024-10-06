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
	const isUserVerified = await auth.checkIsSessionUserVerified()
	// const isUserVerified = await auth.isUserVerified()

	if (!isUserVerified) {
		redirect(generateUrl([Route.USER_VERIFY]))
	}

	return <>{children}</> 
}

// Trasy nie chronione nie wymagaja sprawdzania czy user jest zweryfikowany

// Trasy chronione najpierw weryfikuje middleware czy trasa jest chroniona i czy jest session a wiec i user
// jesli tak to puszcza dalej i wowczas AuthVerificationProvider sprawdza czy user jest zweryfikowany i ma co sprawdzic bo jesli
// middleware przepuscil zadanie to znaczy ze jest session a wiec i jest sessionUser a wiec checkIsUserVerified bedzie dzialac bo pracuje na 
// zalogowanym userze
