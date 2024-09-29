import { createUser } from '@/lib/actions/auth.actions'

export const handleCreateUser = async (userFormValues: CreateUserData) => {
	try {
		await new Promise((resolve) => {
			setTimeout(resolve, 2000)
		})

		const createdUser = await createUser(userFormValues)

		return createdUser

	} catch (err) {
		console.error(err)
	}
}


