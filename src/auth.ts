// modules
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'
// lib
import { createSessionClient } from '@/lib/appwrite.config'
import { Auth } from '@/lib/types/enums'

const auth = {
	sessionUser: null as any,
	sessionSecretFromCookie: null as RequestCookie | null | undefined,

	getSessionUser: async () => {
		auth.sessionSecretFromCookie = cookies().get(Auth.SESSION)

		if (!auth.sessionSecretFromCookie || !auth.sessionSecretFromCookie.value) {
			console.error("Session cookie is missing or invalid.")
			auth.sessionUser = null
			return auth.sessionUser
		}

		try {
			const { account } = await createSessionClient(
				auth.sessionSecretFromCookie!.value
			)
			auth.sessionUser = await account.get()
		} catch (err) {
			console.error(err)
      auth.sessionUser = null
      auth.sessionSecretFromCookie = null
		}

    return auth.sessionUser
	},
}

export default auth
