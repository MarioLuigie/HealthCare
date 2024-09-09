// lib
import { registerPatient } from '@/lib/actions/patient.actions'

export const handleRegisterPatient = async (patient: RegisterPatientParams) => {
	try {
		await new Promise((resolve) => {
			setTimeout(resolve, 2000)
		})

		// patient without FormData files - after deepClone()
		const registeredPatient = await registerPatient(patient)

		return registeredPatient
	} catch (err) {
		console.error(err)
	}
}