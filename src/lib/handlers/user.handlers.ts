import { createUser, registerPatient } from '@/lib/actions/user.actions'

export const handleCreateUser = async (user: CreateUserParams) => {
	try {
		await new Promise((resolve) => {
			setTimeout(resolve, 2000)
		})

		const createdUser = await createUser(user)

		return createdUser

	} catch (err) {
		console.error(err)
	}
}

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
