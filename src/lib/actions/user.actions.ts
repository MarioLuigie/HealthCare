'use server'

// modules
import { ID, Query } from 'node-appwrite'
// lib
import { users } from '@/lib/appwrite.config'
import { deepClone } from '@/lib/utils'

// Create user in appwrite users auth
export async function createUser(user: CreateUserParams) {
	try {
		const createdUser: User = await users.create(
			ID.unique(),
			user.email,
			user.phone,
			undefined,
			user.name
		)

		return deepClone(createdUser)
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

export async function getUser(userId: string) {
	try {
		const user = await users.get(userId)

		return deepClone(user)
	} catch (err) {
		console.error(err)
	}
}


