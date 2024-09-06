import { createUser } from '@/lib/actions/user.actions'

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
