'use server'

// modules
import { ID, Query } from 'node-appwrite'
// lib
import { createAdminClient, createClient } from '@/lib/appwrite.config'
import { deepClone, generateUrl } from '@/lib/utils'
import { SignInAuthFormValues, SignUpAuthFormValues } from '@/lib/types/zod'
import { Route } from '@/lib/constants/paths'
import { cookies } from 'next/headers'
import { Auth } from '@/lib/types/enums'

// Sign Up and return created user
export async function signUp(authFormValues: SignUpAuthFormValues) {
	// const { users, account } = await createAdminClient()
	const { account } = await createClient()
	let session = null

	console.log(authFormValues)

	try {
		const createdUser = await account.create(
			ID.unique(),
			authFormValues.email,
			// authFormValues.phone,
			// undefined, // do usuniecia przy account.create
			authFormValues.password,
			authFormValues.name
		)

		if (createdUser) {
			session = await account.createEmailPasswordSession(
				authFormValues.email,
				authFormValues.password
			)
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

export async function Logout() {
	try {
		
	} catch (err) {
		console.error(err)
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
