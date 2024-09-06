'use server'

// modules
import { ID, Query } from 'node-appwrite'
// lib
import { users } from '@/lib/appwrite.config'

// USER
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

		return createdUser
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

export async function getUser () {

}

// PATIENT
// Register patient - add patient to patient collection in appwrite database
export async function registerPatient () {
  try {
    
  } catch (err) {
    console.error('An error occurred while registering a new patient:', err)
  }
}
