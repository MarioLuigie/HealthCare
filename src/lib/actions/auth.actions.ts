'use server'

// modules
import { ID, Query } from 'node-appwrite'
// lib
import { createAdminClient } from '@/lib/appwrite.config'
import { deepClone } from '@/lib/utils'
import { SignInAuthFormValues, SignUpAuthFormValues } from '@/lib/types/zod'

// Sign Up and return created user
export async function signUp(authFormValues: SignUpAuthFormValues) {
	const { users, account } = await createAdminClient()

	try {
		const createdUser = await account.create(
			ID.unique(),
			authFormValues.email,
			// authFormValues.phone,
			authFormValues.password,
			authFormValues.name,
		)

		return deepClone(createdUser)
	} catch (err: any) {
		// Check existing user
		if (err && err?.code === 409) {
			const documents = await users.list([
				Query.equal('email', [authFormValues.email]),
			])

			return documents.users[0]
		}
		console.error('An error occurred while creating a new user:', err)
	}
}

// Sign In and return session with secret/accessToken
export async function signIn(authFormValues: SignInAuthFormValues) {
	const { users } = await createAdminClient()

	try {

	} catch (err: any) {
		console.error('An error occurred while loging:', err)
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
