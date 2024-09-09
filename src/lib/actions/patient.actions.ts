'use server'

// lib
import { databases } from '@/lib/appwrite.config'
import { deepClone } from '@/lib/utils'

// Register patient - add patient to patient collection in appwrite database
export async function registerPatient(patient: RegisterPatientParams) {
	try {
    // Save FormData files in patient.identificationDocument to storage bucket in Appwrite
    let file

    if (
      patient.identificationDocument && 
      patient.identificationDocument instanceof FormData && 
      patient.identificationDocument.has('files[]') 
    ) {
     console.log("YES! FILES EXIST")
    }

		// patient with FormData files - before deepClone()
		return deepClone(patient)
	} catch (err) {
		console.error('An error occurred while registering a new patient:', err)
	}
}