'use server'

// modules
import { ID, Query } from 'node-appwrite'
// lib
import {
	createAdminClient,
	createClient,
	createSessionClient,
} from '@/lib/appwrite.config'
import { deepClone, generateUrl } from '@/lib/utils'
import { SignInAuthFormValues, SignUpAuthFormValues } from '@/lib/types/zod'
import { Route } from '@/lib/constants/paths'
import { cookies } from 'next/headers'
import { Auth } from '@/lib/types/enums'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

// Sign Up and return created user
export async function signUp(authFormValues: SignUpAuthFormValues) {
	// const { users, account } = await createAdminClient()
	const { email, password, name } = authFormValues
	const { account } = await createClient()
	let session = null

	console.log(authFormValues)

	try {
		const createdUser = await account.create(
			ID.unique(),
			email,
			// authFormValues.phone,
			// undefined, // do usuniecia przy account.create
			password,
			name
		)

		if (createdUser) {
			session = await signIn({ email, password })
		}

		console.log('***session', session)

		// if (session) {
		// 	const result = await account.createVerification(generateUrl([Route.VERIFY_ACCOUNT]))
		// }

		// await account.createVerification("http://localhost:3000/verify-account") // nie moze byc na serwerze weryfikacja tylko na kliencie - dostep do sesji

		return deepClone(createdUser)
	} catch (err: any) {
		// Check existing user
		// if (err && err?.code === 409) {
		//   const documents = await users.list([
		//     Query.equal("email", [authFormValues.email]),
		//   ])

		//   return documents.users[0]
		// }
		console.error('An error occurred while creating a new user:', err)
	}
}

// Sign In and return session with secret/accessToken
export async function signIn(authFormValues: SignInAuthFormValues) {
	const { account } = await createAdminClient()
	const { email, password } = authFormValues

	try {
		const session = await account.createEmailPasswordSession(email, password)

		console.log('***SESSION', session)

		// Save session secret to cookies under the key 'session' - read in auth.ts
		cookies().set(Auth.SESSION, session.secret, {
			httpOnly: true,
			sameSite: 'strict',
			secure: true,
			expires: new Date(session.expire),
			path: Route.HOME,
		})

		return session
	} catch (err: any) {
		console.error('An error occurred while loging:', err)
	}
}

export async function logout() {
	let sessionCookie: RequestCookie | null | undefined = cookies().get(
		Auth.SESSION
	)

	if (!sessionCookie) {
		cookies().delete(Auth.SESSION)
		sessionCookie = null
		return { success: false }
	}

	try {
		const { account } = await createSessionClient(sessionCookie.value)
		await account.deleteSession('current')

		cookies().set(Auth.SESSION, '', { expires: new Date(0) })

		console.log('***DELETE SESSION RESULT - from server action')
		return { success: true, message: 'User logged out with successfully' }
	} catch (err) {
		cookies().set(Auth.SESSION, '', { expires: new Date(0) })
		// cookies().delete(Auth.SESSION)
		sessionCookie = null
		console.error('***Error from server action', err)
		return {
			success: false,
			message: 'Something went wrong while logout user',
		}
	}
}

export async function verifyAccount(userId: string, secret: string) {
	const { account } = await createAdminClient()
	try {
		await account.updateVerification(userId, secret)
		return { success: true, message: 'Weryfikacja zakończona pomyślnie.' }
	} catch (error) {
		console.error('Błąd podczas weryfikacji emaila:', error)
		return { success: false, message: 'Weryfikacja nie powiodła się.' }
	}
}

export async function getUser(userId: string) {
	const { users } = await createAdminClient()

	try {
		const user = await users.get(userId)

		return deepClone(user)
	} catch (err) {
		console.error('An error occurred while retrieving the user details:', err)
	}
}

// ***SESSION {
//   '$id': '66fc455e0d9202867346',
//   '$createdAt': '2024-10-01T18:54:22.066+00:00',
//   '$updatedAt': '2024-10-01T18:54:22.066+00:00',
//   userId: '66fa86960008afbcb5b7',
//   expire: '2025-10-01T18:54:22.055+00:00',
//   provider: 'email',
//   providerUid: 'dawid@gmail.com',
//   providerAccessToken: '',
//   providerAccessTokenExpiry: '',
//   providerRefreshToken: '',
//   ip: '185.73.60.237',
//   osCode: 'WIN',
//   osName: 'Windows',
//   osVersion: '95',
//   clientType: '',
//   clientCode: '',
//   clientName: '',
//   clientVersion: '',
//   clientEngine: '',
//   clientEngineVersion: '',
//   deviceName: 'desktop',
//   deviceBrand: '',
//   deviceModel: '',
//   countryCode: 'pl',
//   countryName: 'Poland',
//   current: true,
//   factors: [ 'password' ],
//   secret: 'eyJpZCI6IjY2ZmE4Njk2MDAwOGFmYmNiNWI3Iiwic2VjcmV0IjoiNWY2YmY4OTI5NjExOGYzZWIxZTAyNzUwYTdkMTgwNWExNTBkMTExZTA5MjczZDZkNTRhOGM3MTZiYjdmOGViZjk4ZjQ3YWY0ZTE4ZDg3NTU4NmI1NDcwM2M5MWJhZWRiMGQyNmZlNGY2YzA0MWY5MWRhZGM0MGMxNDQ3NTAwZDJhMDRjMzM2NjZmOGRmMGNlYTBmNjkxMTMzYWZiODU3N2FlNjA1OGQ2ZTYwNWM3ODYxMzY0ZmU3YTU4Zjc2M2I1YzM5OTBmZTEwMmY0MWRjMzg5MDdkYmIxNGEyM2I2MTRjMjAzMzUzODA2N2M3NDAzY2E3MTRhMTJlMTU5OTkzNiJ9',
//   mfaUpdatedAt: ''
// }
