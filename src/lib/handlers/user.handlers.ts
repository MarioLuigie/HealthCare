import { createUser } from '@/lib/actions/user.actions'

export const handleCreateUser = async (data: CreateUserParams) => {
	try {
		await new Promise((resolve) => {
			setTimeout(resolve, 2000)
		})

		const result = await createUser(data)

	} catch (err) {
		console.error(err)
	}
}
