// modules
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	console.log('***WEBHOOK USER VERIFIED REQUEST***')
	console.log('Request Headers:', req.headers)

	try {
		const body = await req.json()
		console.log('Request Body:', body) // Zobacz, co przychodzi w body

		// Sprawdź, czy token jest obecny
		if (!body.secret) {
			console.error('Token not found in body')
			return NextResponse.json(
				{ success: false,
          message: 'Token not found' },
				{ status: 400 }
			)
		}

		// Twoja logika przetwarzania...

		return NextResponse.json(
			{ success: true,
        message: 'user-verified webhook processed with successfully' },
			{ status: 200 }
		)
	} catch (err) {
		console.error('Error processing webhook:', err)
		return NextResponse.json(
			{ success: false,
        message: 'Something went wrong with user-verified webhook' },
			{ status: 500 }
		)
	}
}

// ***WEBHOOK USER VERIFIED REQUEST***
// Request Headers: Headers {
//   'x-appwrite-webhook-signature': 'WcDeoOOPsAmSJyGY2lFDM6Jhj4E=',
//   'x-appwrite-webhook-project-id': '66d9d5c5000d0b96a418',
//   'x-appwrite-webhook-user-id': '66fff9c9000616326882',
//   'x-appwrite-webhook-name': 'user-verified',
//   'x-appwrite-webhook-events': 'users.66fff9c9000616326882.verification.66fff9c67d2e0e534271.update,users.*.verification.*.update,users.66fff9c9000616326882.verification.*.update,users.*.verification.66fff9c67d2e0e534271.update,users.66fff9c9000616326882.verification.66fff9c67d2e0e534271,users.*.verification.*,users.66fff9c9000616326882.verification.*,users.*.verification.66fff9c67d2e0e534271,users.66fff9c9000616326882,users.*',
//   'x-appwrite-webhook-id': '66ffe6e72aa615fffd95',
//   'content-type': 'application/json',
//   accept: '*/*',
//   'user-agent': 'Appwrite-Server v0.14.27. Please report abuse at security@appwrite.io',
//   'content-length': '236',
//   'x-forwarded-port': '443',
//   'x-forwarded-ssl': 'on',
//   'x-forwarded-proto': 'https',
//   'x-forwarded-for': '206.189.59.102',
//   'x-real-ip': '206.189.59.102',
//   connection: 'close',
//   host: 'old-views-obey.loca.lt',
//   'x-forwarded-host': 'old-views-obey.loca.lt'
// }

// Request Body: {
//   '$id': '66fff9c67d2e0e534271',
//   '$createdAt': '2024-10-04T14:20:54.513+00:00',
//   userId: '66fff9c9000616326882',
//   secret: '35a659c20bb58b224c29bdb95496c0bd0e75dafc9ca196c46bb2ebdf17e4b47b',
//   expire: '2024-10-04T15:20:54.512+00:00',
//   phrase: ''
// }
//  POST /api/webhooks/user-verified 200 in 3603ms
