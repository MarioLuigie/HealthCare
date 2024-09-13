// lib
import { registerPatient } from '@/lib/actions/patient.actions'
import { PatientFormValues } from '@/lib/types/zod'
import { prepareFileUploadData } from '../utils'

export const handleRegisterPatient = async (
	patientFormValues: PatientFormValues,
	userId: string
) => {
	try {
		await new Promise((resolve) => {
			setTimeout(resolve, 2000)
		})

		// Create FormData files from files
		const formData = prepareFileUploadData(
			patientFormValues.identificationDocuments
		)

		// FormData's files to checkout is true
		formData?.forEach(function (value, key) {
			console.log(key, value)
		})

		const registerPatientData = {
			...patientFormValues,
			userId,
			birthDate: new Date(patientFormValues.birthDate),
			identificationDocuments: formData,
		}

		// patient without FormData files - after deepClone()
		const registeredPatient = await registerPatient(registerPatientData)

		return registeredPatient
	} catch (err) {
		console.error(err)
	}
}
