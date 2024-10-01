// lib
import { signIn, signUp, logout } from '@/lib/actions/auth.actions'
import { SignInAuthFormValues, SignUpAuthFormValues } from '@/lib/types/zod'
import { generateUrl } from '../utils'
import { Route } from '../constants/paths'

export const handleSignUp = async (authFormValues: SignUpAuthFormValues) => {
	try {
		await new Promise((resolve) => {
			setTimeout(resolve, 2000)
		})

		// console.log(authFormValues)

		const createdUser = await signUp(authFormValues)

		return createdUser

	} catch (err) {
		console.error(err)
	}
}

export const handleSignIn = async (authFormValues: SignInAuthFormValues) => {
	try {
		await new Promise((resolve) => {
			setTimeout(resolve, 2000)
		})

		const session = await signIn(authFormValues)

		return session
	} catch (err) {
		console.error(err)
	}
}

export const handleLogout = async (router: any) => {
	try {
		const { success } = await logout()

		if(success) {
			router.push(generateUrl([Route.SIGN_IN]))
		}

		console.log('User logged out with successfully - from handleLogout', success)
	} catch (err) {
		console.error(err)
	}
}

// export const handleCreateUser = async (userFormValues: CreateUserData) => {
// 	try {
// 		await new Promise((resolve) => {
// 			setTimeout(resolve, 2000)
// 		})

// 		const createdUser = await createUser(userFormValues)

// 		return createdUser

// 	} catch (err) {
// 		console.error(err)
// 	}
// }


