import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'
import { createSessionClient } from '@/lib/appwrite.config'

const auth = {
	user: null as any,
	sessionCookie: null as RequestCookie | null | undefined,

	getSessionUser: async () => {
		auth.sessionCookie = cookies().get('session')

		try {
			const { account } = await createSessionClient(
				auth.sessionCookie!.value
			)
			auth.user = await account.get()
		} catch (err) {
			console.error(err)
      auth.user = null
      auth.sessionCookie = null
		}

    return auth.user
	},
}

export default auth