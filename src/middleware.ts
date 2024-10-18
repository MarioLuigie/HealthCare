// modules
import { NextRequest, NextResponse } from 'next/server'
import auth from '@/auth'
// lib
import { Route } from '@/lib/constants/paths'
import { Auth } from '@/lib/types/enums'

export async function middleware(req: NextRequest) {
	const sessionUser = await auth.getSessionUser()

	console.log("***User from middleware", sessionUser)

	if (!sessionUser) {
		console.log('***Middleware is running!')
		req.cookies.delete(Auth.SESSION)
		return NextResponse.redirect(new URL(Route.HOME, req.url))
	}
	return NextResponse.next()
}

export const config = {
	// matcher: ['/dashboard/:path*'],
	matcher: [],
}

// export const config = {
// 	matcher: ['/dashboard/:path*'], - save all routes witch params too
// }

// Middleware is running!
// const req = {
//   cookies: {}, // RequestCookies object
//   geo: {}, // Geolocation information
//   ip: undefined, // Client IP (if available)
//   nextUrl: {
//     href: 'http://localhost:3000/dashboard',
//     origin: 'http://localhost:3000',
//     protocol: 'http:',
//     username: '',
//     password: '',
//     host: 'localhost:3000',
//     hostname: 'localhost',
//     port: '3000',
//     pathname: '/dashboard',
//     search: '',
//     searchParams: new URLSearchParams(),
//     hash: ''
//   },
//   url: 'http://localhost:3000/dashboard',
//   bodyUsed: false, // Indicates if the body has been read
//   cache: 'default', // Cache mode
//   credentials: 'same-origin', // Request credentials mode
//   destination: '', // Resource destination
//   headers: {
//     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
//     'accept-encoding': 'gzip, deflate, br, zstd',
//     'accept-language': 'pl-PL,pl;q=0.9',
//     'cache-control': 'no-cache',
//     connection: 'keep-alive',
//     host: 'localhost:3000',
//     pragma: 'no-cache',
//     'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
//     'sec-ch-ua-mobile': '?0',
//     'sec-ch-ua-platform': '"Windows"',
//     'sec-fetch-dest': 'document',
//     'sec-fetch-mode': 'navigate',
//     'sec-fetch-site': 'none',
//     'sec-fetch-user': '?1',
//     'upgrade-insecure-requests': '1',
//     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
//     'x-forwarded-for': '::1',
//     'x-forwarded-host': 'localhost:3000',
//     'x-forwarded-port': '3000',
//     'x-forwarded-proto': 'http'
//   },
//   integrity: '', // Subresource Integrity (SRI) metadata
//   keepalive: false, // Keep the connection alive
//   method: 'GET', // HTTP method
//   mode: 'cors', // CORS mode
//   redirect: 'follow', // Follow redirects automatically
//   referrer: 'about:client', // Referrer information
//   referrerPolicy: '', // Referrer policy
//   signal: new AbortSignal(), // Used to abort requests
// };

// console.log(req);

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