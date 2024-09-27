'use server'

// modules
import { Models } from 'node-appwrite'
import { InputFile } from 'node-appwrite/file'
import {
	APPWRITE_DB_ID,
	APPWRITE_PROJECT_ID,
	NEXT_PUBLIC_APPWRITE_ENDPOINT,
	APPWRITE_DB_PATIENT_COLLECTION_ID,
	APPWRITE_IDENTIFICATION_DOCUMENTS_BUCKET_ID,
	APPWRITE_DB_IDENTIFICATION_DOCUMENT_COLLECTION_ID,
	createAdminClient,
} from '@/lib/appwrite.config'
import { ID, Query } from 'node-appwrite'
// lib
import { UploadedFileBasicStructure } from '@/lib/types/types'
import { deepClone, formatDateToYMD } from '@/lib/utils'

// Get patient
export const getPatient = async (userId: string) => {
	const { databases } = await createAdminClient()

	try {
		const patients = await databases.listDocuments(
			APPWRITE_DB_ID!,
			APPWRITE_DB_PATIENT_COLLECTION_ID!,
			[Query.equal('userId', [userId])]
		)

		return deepClone(patients.documents[0])
	} catch (err) {
		console.error(
			'An error occurred while retrieving the patient details:',
			err
		)
	}
}

// Register patient - add patient to patient collection in appwrite database
export async function registerPatient(
	registerPatientData: RegisterPatientData
) {
	const { databases, storage } = await createAdminClient()

	try {
		// Check if the patient has FormData with files in identificationDocument
		if (
			registerPatientData.identificationDocuments &&
			registerPatientData.identificationDocuments instanceof FormData &&
			registerPatientData.identificationDocuments.has('files[]')
		) {
			// Get oll files from FormData files
			const files: Blob[] =
				registerPatientData.identificationDocuments.getAll(
					'files[]'
				) as Blob[]

			let uploadedFiles: Models.File[] = [] // Używamy typu Models.File z Appwrite zamiast File[] from browser

			// Upload each file to Appwrite storage
			uploadedFiles = await Promise.all(
				files.map(async (file: Blob, index: number) => {
					const inputFile = InputFile.fromBuffer(
						Buffer.from(await file.arrayBuffer()), // Convert Blob to Buffer
						`file_${index}_${Date.now()}` // Generate unique file name for appwrite only to save
					)

					// Upload file to Appwrite Storage Bucket
					const res = await storage.createFile(
						APPWRITE_IDENTIFICATION_DOCUMENTS_BUCKET_ID!, // Bucket id in Appwrite
						ID.unique(), // Use unique ID generation for each file
						inputFile // Converted file Blob to Buffer
					)
					return res
				})
			)
			console.log('Files successfully uploaded to Appwrite:', uploadedFiles)

			// Create array of uploaded files (return uploaded files as js objs for database)
			const uploadedFilesBasicStructure: UploadedFileBasicStructure[] =
				uploadedFiles &&
				uploadedFiles instanceof Array &&
				uploadedFiles.length > 0
					? uploadedFiles.map((uploadedFile) => ({
							storageId: uploadedFile?.$id ? uploadedFile.$id : null,
							url: uploadedFile?.$id
								? `${NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${APPWRITE_IDENTIFICATION_DOCUMENTS_BUCKET_ID}/files/${uploadedFile.$id}/view??project=${APPWRITE_PROJECT_ID}`
								: null,
					  }))
					: []

			// Create a new documents in identificationDocuments collection and return array of id's of identificationDocuments
			const createdUploadedFiles = await Promise.all(
				uploadedFilesBasicStructure.map(
					async (file: UploadedFileBasicStructure) => {
						const res = await databases.createDocument(
							APPWRITE_DB_ID!,
							APPWRITE_DB_IDENTIFICATION_DOCUMENT_COLLECTION_ID!,
							ID.unique(),
							file
						)
						return res.$id
					}
				)
			)

			console.log('***createdUploadedFiles IDs', createdUploadedFiles)

			// Create a new patient in patient collection with arrray of id's of identificationDocuments
			const registeredPatient = await databases.createDocument(
				APPWRITE_DB_ID!,
				APPWRITE_DB_PATIENT_COLLECTION_ID!,
				ID.unique(),
				{
					...registerPatientData,
					identificationDocuments: createdUploadedFiles,
					birthDate: formatDateToYMD(registerPatientData.birthDate),
				}
			)

			console.log('***Registered Patient', registeredPatient)

			return deepClone(registeredPatient)
		} else {
			// Create a new patient in patient collection with empty array of identificationDocuments
			const registeredPatient = await databases.createDocument(
				APPWRITE_DB_ID!,
				APPWRITE_DB_PATIENT_COLLECTION_ID!,
				ID.unique(),
				{
					...registerPatientData,
					birthDate: formatDateToYMD(registerPatientData.birthDate),
				}
			)

			console.log('***Registered Patient', registeredPatient)

			return deepClone(registeredPatient)
		}
	} catch (err) {
		console.error('An error occurred while registering a new patient:', err)
	}
}




// Get patient
// export const getPatient = async (userId: string) => {
// 	try {
// 		const patients = await databases.listDocuments(
// 			APPWRITE_DB_ID!,
// 			APPWRITE_DB_PATIENT_COLLECTION_ID!,
// 			[Query.equal('userId', [userId])]
// 		)

// 		return deepClone(patients.documents[0])
// 	} catch (err) {
// 		console.error(
// 			'An error occurred while retrieving the patient details:',
// 			err
// 		)
// 	}
// }









// SAVE ONE SINGLE FILE TO STORAGE BUCKET
{
	/* if (
  patient.identificationDocument && 
  patient.identificationDocument instanceof FormData && 
  patient.identificationDocument.has('files[]') 
) {
 const inputFile = InputFile.fromBuffer(
  patient?.identificationDocument?.get('blobFile') as Blob,
  patient?.identificationDocument?.get('fileName') as string
 )

 file = await storage.createFile(
  APPWRITE_PUBLIC_BUCKET_ID!,
  ID.unique(),
  inputFile
 )
} */
}

// Przykład res zwróconego przez Appwrite, res to poj plik
// Promise.all kolekcjonuje wszystkie resy w tablicy i zwraca do uploadedFiles
{
	/*
{
  "$id": "fileId",
  "$createdAt": "2024-09-09T00:00:00Z",
  "$updatedAt": "2024-09-09T00:00:00Z",
  "$permissions": {
    "read": ["role:member"],
    "write": ["role:member"]
  },
  "bucketId": "yourBucketId",
  "name": "fileName.jpg",
  "size": 123456,
  "type": "image/jpeg",
  "mimeType": "image/jpeg",
  "url": "https://example.com/path/to/file",
  "etag": "etagValue"
}
*/
}

// STRUKTURA OBIEKTU PACJENTA PO ZAPISIE DO BAZY DANYCH I PO SPARSOWANIU OBIEKTÓW PLIKÓW W identificationDocuments
{
	/*
***patient 
{name: 'Mariusz Łotocki', email: 'mk.lotocki@gmail.com', phone: '+48509312253', birthDate: '1986-01-19T23:00:00.000Z', gender: 'Male', …}
$collectionId
: 
"66d9d8ad002494cdef91"
$createdAt
: 
"2024-09-09T13:52:16.254+00:00"
$databaseId
: 
"66d9d80a003917942dd6"
$id
: 
"66defd8d0011bdbb4d0b"
$permissions
: 
[]
$updatedAt
: 
"2024-09-09T13:52:16.254+00:00"
address
: 
"Sobieskiego 9a"
allergies
: 
""
birthDate
: 
"1986-01-19T23:00:00.000Z"
currentMedication
: 
""
disclosureConsent
: 
true
email
: 
"mk.lotocki@gmail.com"
emergencyContactName
: 
"Mariusz Łotocki"
emergencyContactNumber
: 
"+48509312253"
familyMedicalHistory
: 
""
gender
: 
"Male"
identificationDocuments
: 
Array(2)
0
: 
identificationDocumentId
: 
"66defd8b003d3c7805fc"
identificationDocumentUrl
: 
"https://cloud.appwrite.io/v1/storage/buckets/66d9d9fd00319d398b25/files/66defd8b003d3c7805fc/view??project=66d9d5c5000d0b96a418"
[[Prototype]]
: 
Object
1
: 
identificationDocumentId
: 
"66defd8b003c2bdb95b5"
identificationDocumentUrl
: 
"https://cloud.appwrite.io/v1/storage/buckets/66d9d9fd00319d398b25/files/66defd8b003c2bdb95b5/view??project=66d9d5c5000d0b96a418"
[[Prototype]]
: 
Object
length
: 
2
[[Prototype]]
: 
Array(0)
identificationNumber
: 
"0987654321"
identificationType
: 
"Birth Certificate"
insurancePolicyNumber
: 
"1234567890"
insuranceProvider
: 
"WARTA"
name
: 
"Mariusz Łotocki"
occupation
: 
"Architect"
pastMedicalHistory
: 
""
phone
: 
"+48509312253"
primaryPhysician
: 
"Alyana Cruz"
privacyConsent
: 
true
treatmentConsent
: 
true
userId
: 
"66db131c0019fb1f19aa"
[[Prototype]]
: 
Object
*/
}
