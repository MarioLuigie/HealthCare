import * as sdk from 'node-appwrite'

// Destructured process obj with envs
export const {
	// Main
	APPWRITE_API_KEY,
	NEXT_PUBLIC_APPWRITE_ENDPOINT,
	APPWRITE_PROJECT_ID,
	APPWRITE_DB_ID,
	// Collection
	APPWRITE_DB_PATIENT_COLLECTION_ID,
	APPWRITE_DB_DOCTOR_COLLECTION_ID,
	APPWRITE_DB_APPOINTMENT_COLLECTION_ID,
	APPWRITE_DB_CHANGE_STATUS_COLLECTION_ID,
	APPWRITE_DB_IDENTIFICATION_DOCUMENT_COLLECTION_ID,
	// Storage
	APPWRITE_PUBLIC_BUCKET_ID,
	APPWRITE_IDENTIFICATION_DOCUMENTS_BUCKET_ID,
} = process.env

// Initialize Appwrite Client
const client = new sdk.Client()

// Add key to client for auth
client
	.setEndpoint(NEXT_PUBLIC_APPWRITE_ENDPOINT!)
	.setProject(APPWRITE_PROJECT_ID!)
	.setKey(APPWRITE_API_KEY!)

// Export instances with client auth-ed
export const databases = new sdk.Databases(client)
export const users = new sdk.Users(client)
export const messaging = new sdk.Messaging(client)
export const storage = new sdk.Storage(client)
