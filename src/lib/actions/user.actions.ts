'use server'

// modules
import { ID, Query } from 'node-appwrite'
// lib
import { users } from '@/lib/appwrite.config'
import { deepClone } from '@/lib/utils'

// Create user in appwrite users auth
export async function createUser(userFormValues: CreateUserParams) {
	try {
		const createdUser: User = await users.create(
			ID.unique(),
			userFormValues.email,
			userFormValues.phone,
			undefined,
			userFormValues.name
		)

		return deepClone(createdUser)
	} catch (err: any) {
		// Check existing user
		if (err && err?.code === 409) {
			const documents = await users.list([
				Query.equal('email', [userFormValues.email]),
			])

			return documents.users[0]
		}
		console.error('An error occurred while creating a new user:', err)
	}
}

export async function getUser(userId: string) {
	try {
		const user = await users.get(userId)

		return deepClone(user)
	} catch (err) {
		console.error("An error occurred while retrieving the user details:", err)
	}
}


