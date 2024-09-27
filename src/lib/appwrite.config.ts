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

interface Session {
	$id: string; // Session ID.
	$createdAt: string; // Session creation date in ISO 8601 format.
	$updatedAt: string; // Session update date in ISO 8601 format.
	userId: string; // User ID.
	expire: string; // Session expiration date in ISO 8601 format.
	provider: string; // Session Provider.
	providerUid: string; // Session Provider User ID.
	providerAccessToken: string; // Session Provider Access Token.
	providerAccessTokenExpiry: string; // The date of when the access token expires in ISO 8601 format.
	providerRefreshToken: string; // Session Provider Refresh Token.
	ip: string; // IP in use when the session was created.
	osCode: string; // Operating system code name.
	osName: string; // Operating system name.
	osVersion: string; // Operating system version.
	clientType: string; // Client type.
	clientCode: string; // Client code name.
	clientName: string; // Client name.
	clientVersion: string; // Client version.
	clientEngine: string; // Client engine name.
	clientEngineVersion: string; // Client engine version.
	deviceName: string; // Device name.
	deviceBrand: string; // Device brand name.
	deviceModel: string; // Device model name.
	countryCode: string; // Country two-character ISO 3166-1 alpha code.
	countryName: string; // Country name.
	current: boolean; // Returns true if this is the current user session.
	factors: string[]; // Returns a list of active session factors.
	secret?: string; // Secret used to authenticate the user. Only included if the request was made with an API key.
	mfaUpdatedAt?: string; // Most recent date in ISO 8601 format when the session successfully passed MFA challenge.
}


export const createAdminClient = async () => {
	const client = new sdk.Client()
		.setEndpoint(NEXT_PUBLIC_APPWRITE_ENDPOINT!)
		.setProject(APPWRITE_PROJECT_ID!)
		.setKey(APPWRITE_API_KEY!)

	return {
		get account() {
			return new sdk.Account(client)
		},

		get users() {
			return new sdk.Users(client)
		},

		get databases() {
			return new sdk.Databases(client)
		},

		get messaging() {
			return new sdk.Messaging(client)
		},

		get storage() {
			return new sdk.Storage(client)
		},
	}
}

export const createSessionClient = async (session: any) => {
	const client = new sdk.Client()
		.setEndpoint(NEXT_PUBLIC_APPWRITE_ENDPOINT!)
		.setProject(APPWRITE_PROJECT_ID!)

	if (session) {
		client.setSession(session)
	}
	
	return {
		get account() {
			return new sdk.Account(client)
		},

		get users() {
			return new sdk.Users(client)
		},

		get databases() {
			return new sdk.Databases(client)
		},

		get messaging() {
			return new sdk.Messaging(client)
		},

		get storage() {
			return new sdk.Storage(client)
		},
	}
}

// Creating one global client with full sdk permissions
// // Initialize Appwrite Client
// const client = new sdk.Client()

// // Add key to client for auth
// client
// 	.setEndpoint(NEXT_PUBLIC_APPWRITE_ENDPOINT!)
// 	.setProject(APPWRITE_PROJECT_ID!)
// 	.setKey(APPWRITE_API_KEY!)

// // Export instances with client auth-ed
// export const databases = new sdk.Databases(client)
// export const users = new sdk.Users(client)
// export const messaging = new sdk.Messaging(client)
// export const storage = new sdk.Storage(client)
