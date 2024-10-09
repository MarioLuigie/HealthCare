// lib
import { registerPatient } from '@/lib/actions/patient.actions'
import { PatientFormValues } from '@/lib/types/zod'
import { prepareFormDataFiles } from '../utils'

export const handleRegisterPatient = async (
	patientFormValues: PatientFormValues,
	userId: string
) => {
	try {
		await new Promise((resolve) => {
			setTimeout(resolve, 2000)
		})

		const emptyArray: string[] = []

		const registerPatientData: RegisterPatientData = {
			...patientFormValues,
			userId,
			birthDate: new Date(patientFormValues.birthDate),
			identificationDocuments: emptyArray,
			appointments: emptyArray,
		}

		if (patientFormValues.identificationDocuments.length === 0) {
			const result = await registerPatient(registerPatientData)

			return result
		} else {
			// Create FormData files from files - File[]
			const formData = prepareFormDataFiles(
				patientFormValues.identificationDocuments
			)
			// Overwrite identificationDocuments with fotmData - FormData
			registerPatientData.identificationDocuments = formData
			const result = await registerPatient(registerPatientData)

			return result
		}
	} catch (err: any) {
		console.error(err)
		throw new Error('An error occured while registering patient.')
	}
}




