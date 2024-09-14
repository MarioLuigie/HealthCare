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

		if (patientFormValues.identificationDocuments.length === 0) {
			const emptyArray: string[] = []

			const registerPatientData: RegisterPatientData = {
				...patientFormValues,
				userId,
				birthDate: new Date(patientFormValues.birthDate),
				identificationDocuments: emptyArray,
			}

			// patient without FormData files - after deepClone()
			const registeredPatient = await registerPatient(registerPatientData)

			return registeredPatient
		} else {
			// Create FormData files from files in File[]
			const formData = prepareFormDataFiles(
				patientFormValues.identificationDocuments
			)

			const registerPatientData: RegisterPatientData = {
				...patientFormValues,
				userId,
				birthDate: new Date(patientFormValues.birthDate),
				identificationDocuments: formData,
			}

			// patient without FormData files - after deepClone()
			const registeredPatient = await registerPatient(registerPatientData)

			return registeredPatient
		}
	} catch (err) {
		console.error(err)
	}
}

// FormData's files to checkout is true
// formData?.forEach(function (value, key) {
// 	console.log(key, value)
// })

// lib
// import { registerPatient } from '@/lib/actions/patient.actions'
// import { PatientFormValues } from '@/lib/types/zod'
// import { prepareFormDataFiles } from '../utils'

// export const handleRegisterPatient = async (
// 	patientFormValues: PatientFormValues,
// 	userId: string
// ) => {
// 	try {
// 		await new Promise((resolve) => {
// 			setTimeout(resolve, 2000)
// 		})

// 		if (patientFormValues.identificationDocuments.length === 0) {
// 			const emptyArray: string[] = []

// 			const registerPatientData = {
// 				...patientFormValues,
// 				userId,
// 				birthDate: new Date(patientFormValues.birthDate),
// 				identificationDocuments: emptyArray,
// 			}

// 			// patient without FormData files - after deepClone()
// 			const registeredPatient = await registerPatient(registerPatientData)

// 			return registeredPatient
// 		} else {
// 			// Create FormData files from files in File[]
// 			const formData = prepareFormDataFiles(
// 				patientFormValues.identificationDocuments
// 			)

// 			const registerPatientData = {
// 				...patientFormValues,
// 				userId,
// 				birthDate: new Date(patientFormValues.birthDate),
// 				identificationDocuments: formData,
// 			}

// 			// patient without FormData files - after deepClone()
// 			const registeredPatient = await registerPatient(registerPatientData)

// 			return registeredPatient
// 		}
// 	} catch (err) {
// 		console.error(err)
// 	}
// }
