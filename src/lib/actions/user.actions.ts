'use server'

// modules
import { ID, Query } from 'node-appwrite'
// lib
import { users } from '@/lib/appwrite.config'

export async function createUser(user: CreateUserParams) {
	try {
		const createdUser = await users.create(
			ID.unique(),
			user.email,
			user.phone,
			undefined,
			user.name
		)

		return
	} catch (err: any) {
		// Check existing user
		if (err && err?.code === 409) {
			const documents = await users.list([
				Query.equal('email', [user.email]),
			])

			return documents.users[0]
		}
		console.error('An error occurred while creating a new user:', err)
	}
}
