// lib
import { registerPatient } from '@/lib/actions/patient.actions'
import { PatientFormData } from '@/lib/types/zod'

export const handleRegisterPatient = async (patientFormValues: PatientFormData, userId: string) => {
	try {
		await new Promise((resolve) => {
			setTimeout(resolve, 2000)
		})

		// patient without FormData files - after deepClone()
		const registeredPatient = await registerPatient(patientFormValues, userId)

		return registeredPatient
	} catch (err) {
		console.error(err)
	}
}