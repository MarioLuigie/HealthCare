// modules
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'
// lib
import { createSessionClient } from '@/lib/appwrite.config'
import { Auth } from '@/lib/types/enums'

const auth = {
	sessionUser: null as any,
	sessionSecretFromCookie: null as RequestCookie | null | undefined,

	getSessionUser: async () => {
		auth.sessionSecretFromCookie = cookies().get(Auth.SESSION)

		if (!auth.sessionSecretFromCookie || !auth.sessionSecretFromCookie.value) {
			console.error("auth.ts - Session cookie is missing or invalid.")
			auth.sessionUser = null
			return auth.sessionUser
		}

		try {
			const { account } = await createSessionClient(
				auth.sessionSecretFromCookie!.value
			)
			auth.sessionUser = await account.get()
		} catch (err) {
			console.error(err)
      auth.sessionUser = null
      auth.sessionSecretFromCookie = null
		}

    return auth.sessionUser
	},

	checkIsSessionUserVerified: async () => {
		try {
			const sessionUser = await auth.getSessionUser()
			
			if(sessionUser && sessionUser.emailVerification) {
				return true
			} else {
				return false
			}
		} catch (err) {
			console.error('', err)
			return false
		}
	},
}

export default auth

// ***SESSION {
//   '$id': '66fc455e0d9202867346',
//   '$createdAt': '2024-10-01T18:54:22.066+00:00',
//   '$updatedAt': '2024-10-01T18:54:22.066+00:00',
//   userId: '66fa86960008afbcb5b7',
//   expire: '2025-10-01T18:54:22.055+00:00',
//   provider: 'email',
//   providerUid: 'dawid@gmail.com',
//   providerAccessToken: '',
//   providerAccessTokenExpiry: '',
//   providerRefreshToken: '',
//   ip: '185.73.60.237',
//   osCode: 'WIN',
//   osName: 'Windows',
//   osVersion: '95',
//   clientType: '',
//   clientCode: '',
//   clientName: '',
//   clientVersion: '',
//   clientEngine: '',
//   clientEngineVersion: '',
//   deviceName: 'desktop',
//   deviceBrand: '',
//   deviceModel: '',
//   countryCode: 'pl',
//   countryName: 'Poland',
//   current: true,
//   factors: [ 'password' ],
//   secret: 'eyJpZCI6IjY2ZmE4Njk2MDAwOGFmYmNiNWI3Iiwic2VjcmV0IjoiNWY2YmY4OTI5NjExOGYzZWIxZTAyNzUwYTdkMTgwNWExNTBkMTExZTA5MjczZDZkNTRhOGM3MTZiYjdmOGViZjk4ZjQ3YWY0ZTE4ZDg3NTU4NmI1NDcwM2M5MWJhZWRiMGQyNmZlNGY2YzA0MWY5MWRhZGM0MGMxNDQ3NTAwZDJhMDRjMzM2NjZmOGRmMGNlYTBmNjkxMTMzYWZiODU3N2FlNjA1OGQ2ZTYwNWM3ODYxMzY0ZmU3YTU4Zjc2M2I1YzM5OTBmZTEwMmY0MWRjMzg5MDdkYmIxNGEyM2I2MTRjMjAzMzUzODA2N2M3NDAzY2E3MTRhMTJlMTU5OTkzNiJ9',
//   mfaUpdatedAt: ''
// }

// SESSION USER
// ***User {
//   $id: '66fa86960008afbcb5b7',
//   $createdAt: '2024-09-30T11:07:39.083+00:00',
//   $updatedAt: '2024-10-01T11:34:54.007+00:00',
//   name: 'Dawid Lotocki',
//   registration: '2024-09-30T11:07:39.077+00:00',
//   status: true,
//   labels: [],
//   passwordUpdate: '2024-09-30T11:07:39.077+00:00',
//   email: 'dawid@gmail.com',
//   phone: '',
//   emailVerification: false,
//   phoneVerification: false,
//   mfa: false,
//   prefs: {},
//   targets: [
//   {
//   $id: '66fa867b25bad00553b3',
//   $createdAt: '2024-09-30T11:07:39.154+00:00',
//   $updatedAt: '2024-09-30T11:07:39.154+00:00',
//   name: '',
//   userId: '66fa86960008afbcb5b7',
//   providerId: null,
//   providerType: 'email',
//   identifier: 'dawid@gmail.com'
// }
// ],
//   accessedAt: '2024-10-01T11:34:54.004+00:00'
// }