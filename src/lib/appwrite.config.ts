import * as sdk from 'node-appwrite'

export const {
	APPWRITE_PROJECT_ID,
	APPWRITE_API_KEY,
	APPWRITE_DB_ID,
	APPWRITE_DB_PATIENT_COLLECTION_ID,
	APPWRITE_DB_DOCTOR_COLLECTION_ID,
	APPWRITE_DB_APPOINTMENT_COLLECTION_ID,
	APPWRITE_PUBLIC_BUCKET_ID,
	APPWRITE_PUBLIC_ENDPOINT,
} = process.env

const client = new sdk.Client()

client
	.setEndpoint(APPWRITE_PUBLIC_ENDPOINT!)
	.setProject(APPWRITE_PROJECT_ID!)
	.setKey(APPWRITE_API_KEY!)

export const databases = new sdk.Databases(client)
export const users = new sdk.Users(client)
export const messaging = new sdk.Messaging(client)
export const storage = new sdk.Storage(client)
