'use client'
// modules
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RedirectWithDelay({
	children,
	path,
	delay,
}: {
	children?: React.ReactNode
	path: string
	delay: number
}) {
	const router = useRouter()
	useEffect(() => {
		const timer = setTimeout(() => {
			router.push(path)
		}, delay)

		return () => clearTimeout(timer)
	}, [router, path, delay])

	return children
}
