'use server'

// modules
import { ID, Query } from 'node-appwrite'
// lib
import { createAdminClient } from '@/lib/appwrite.config'
import { deepClone } from '@/lib/utils'
import { SignInAuthFormValues, SignUpAuthFormValues } from '@/lib/types/zod'

// Create user in appwrite users auth
export async function signUp(authFormValues: SignUpAuthFormValues) {
	const { users } = await createAdminClient()

	try {
		const createdUser: UserData = await users.create(
			ID.unique(),
			authFormValues.email,
			authFormValues.phone,
			undefined,
			authFormValues.name
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
