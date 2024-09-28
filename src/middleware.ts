import { NextRequest, NextResponse } from 'next/server'
import { Route } from '@/lib/constants/paths'

export async function middleware(req: NextRequest) {
	const user = false

	if (!user) {
		console.log('Middleware is running!')

		return NextResponse.redirect(new URL(Route.SIGN_IN, req.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/dashboard'],
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
