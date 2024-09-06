import { createUser } from '@/lib/actions/user.actions'

export const handleCreateUser = async (user: CreateUserParams) => {
	try {
		await new Promise((resolve) => {
			setTimeout(resolve, 2000)
		})

		const result = await createUser(user)

	} catch (err) {
		console.error(err)
	}
}
