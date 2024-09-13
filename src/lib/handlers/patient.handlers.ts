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
		let registerPatientData = {...patientFormValues, userId, identificationDocuments: []}

		// Create FormData files from files
		if (
			patientFormValues.identificationDocuments &&
			patientFormValues.identificationDocuments.length > 0
		) {
			const formData = prepareFileUploadData(
				patientFormValues.identificationDocuments
			)

			// FormData's files to checkout is true
			formData?.forEach(function (value, key) {
				console.log(key, value)
			})

			registerPatientData = {
				...registerPatientData,
				birthDate: new Date(patientFormValues.birthDate),
				identificationDocuments: formData,
			}
		} else {
			registerPatientData = {
				...registerPatientData,
				birthDate: new Date(patientFormValues.birthDate),
			}
		}

		// patient without FormData files - after deepClone()
		const registeredPatient = await registerPatient(registerPatientData)

		return registeredPatient
	} catch (err) {
		console.error(err)
	}
}
