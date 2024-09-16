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
			const registeredPatient = await registerPatient(registerPatientData)

			return registeredPatient
		} else {
			// Create FormData files from files - File[]
			const formData = prepareFormDataFiles(
				patientFormValues.identificationDocuments
			)
			// Overwrite identificationDocuments with fotmData - FormData
			registerPatientData.identificationDocuments = formData
			const registeredPatient = await registerPatient(registerPatientData)

			return registeredPatient
		}
	} catch (err) {
		console.error(err)
	}
}




