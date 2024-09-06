'use server'

// modules
import { Query } from 'node-appwrite'

// lib
import { users } from '@/lib/appwrite.config'

export async function createUser(user: CreateUserParams) {
	try {
    

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
