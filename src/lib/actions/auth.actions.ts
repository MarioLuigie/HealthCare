'use server'

// modules
import { ID, Query } from 'node-appwrite'
// lib
import {
	createAdminClient,
	createClient,
	createSessionClient,
} from '@/lib/appwrite.config'
import { generateUrl } from '@/lib/utils'
import { SignInAuthFormValues, SignUpAuthFormValues } from '@/lib/types/zod'
import { Route } from '@/lib/constants/paths'
import { cookies } from 'next/headers'
import { Auth, Roles } from '@/lib/types/enums'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { getErrorByCode } from '../utils/errors'

// Start user verification on Appwrite
export async function createUserVerification(): Promise<void> {
	try {
		const sessionCookie: RequestCookie | null | undefined = cookies().get(
			Auth.SESSION
		)

		if (!sessionCookie || !sessionCookie.value) {
			throw new Error('Session cookie not found or invalid.')
		}

		const { account } = await createSessionClient(sessionCookie.value)

		// Call the user verification function by passing the appropriate URL
		await account.createVerification(
			generateUrl([Route.USER_VERIFICATION_RESULT])
		)
	} catch (err: any) {
		console.error('Error creating user verification:', err)
	}
}

// Server action for change user verification email to true - after clicked email link
export async function updateUserVerification(userId: string, secret: string) {
	try {
		const { account } = await createClient()
		const result = await account.updateVerification(userId, secret)

		console.log('***updateVerification-result', result)

		return { success: true, message: 'Verification completed successfully.' }
	} catch (err: any) {
		if (err.code) {
			console.log('***updateVerification', err)
			return {
				success: false,
				message: getErrorByCode(err.code),
				code: err.code,
			}
		}

		return { success: false, message: 'User verification failed.' }
	}
}

// Sign Up and return created user
export async function signUp(authFormValues: SignUpAuthFormValues) {
	// const { users, account } = await createAdminClient()
	const { email, password, name } = authFormValues
	const { account, users } = await createAdminClient()
	let session = null
	let updatedUser = null

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
			updatedUser = await users.updateLabels(createdUser.$id, [
				Roles.PATIENT,
			])
		}

		if (updatedUser) {
			session = await signIn({ email, password })
		}

		console.log('***session', session)
		console.log('***createdUser', createdUser)
		console.log('***updatedUser', updatedUser)

		if (session) {
			await createUserVerification()
		}

		return {
			success: true,
			data: createdUser,
			message: 'User created successfully.',
		}
	} catch (err: any) {
		if (err.code) {
			console.error('Conflict: User with this email already exists.')
			return {
				success: false,
				message: getErrorByCode(err.code),
			}
		}
		console.error('An error occurred while creating a new user:', err)
		return {
			success: false,
			message: 'An unexpected error occurred. Please try again later.',
		}
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
			sameSite: 'none',
			secure: true,
			expires: new Date(session.expire),
			path: Route.HOME,
		})

		return {
			success: true,
			data: session,
			message: 'User signed in successfully.',
		}
	} catch (err: any) {
		// Error logging to console
		console.error('An error occurred while logging in:', err)

		// Handling specific error codes
		const { code, response } = err

		if (code) {
			return {
				success: false,
				message: getErrorByCode(code),
			}
		} else {
			// Default message for other error codes
			return {
				success: false,
				message:
					response?.message ||
					'An unexpected error occurred. Please try again later.',
			}
		}
	}
}

export async function signOut() {
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
		return { success: true, message: 'User signed out with successfully' }
	} catch (err) {
		cookies().set(Auth.SESSION, '', { expires: new Date(0) })
		// cookies().delete(Auth.SESSION)
		sessionCookie = null
		console.error('***Error from server action', err)
		return {
			success: false,
			message: 'Something went wrong while sign out user',
		}
	}
}

export async function getUser(userId: string) {
	try {
		const { users } = await createAdminClient()
		const user = await users.get(userId)

		return { success: true, data: user, message: 'User loaded successfully.' }
	} catch (err: any) {
		console.error('An error occurred while retrieving the user details:', err)
		return {
			success: false,
			message: 'An error occured while retrieving user.',
		}
	}
}

// ***updateVerification-result {
//   '$id': '6701ecee5732866affd3',
//   '$createdAt': '2024-10-06T01:50:38.358+00:00',
//   userId: '6701eced000bce0160ef',
//   secret: 'c90791237ba16a1e8fb3c520556884b35472b7d8999c24756b0bd8e07a0d3ce1',
//   expire: '2024-10-06T02:50:38.357+00:00',
//   phrase: ''
// }

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
