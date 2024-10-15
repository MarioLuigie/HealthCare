'use client'
import LogoFull from '@/components/content/Logo'
import BasicButton from '@/components/shared/buttons/BasicButton'
import LinkButton from '@/components/shared/buttons/LinkButton'
import SignOut from '@/components/content/SignOutButton'
import { Route } from '@/lib/constants/paths'
import { generateUrl } from '@/lib/utils'
// modules
import { useRouter } from 'next/navigation'

export default function Error({
	error,
	reset,
}: {
	error: Error
	reset: () => void
}) {
	const router = useRouter()
	return (
		<div className="flex flex-col gap-4 items-center justify-center min-h-screen grow">
			<LogoFull redirect/>
			<h2 className="text-lg mt-12">Something went wrong.</h2>
			<p className='text-md text-dark-600'>{error.message}</p>
			<div className="flex flex-col gap-4 mt-6">
				<BasicButton onClick={() => reset()} variant='fill'>Try again</BasicButton>
				<LinkButton href={generateUrl([Route.DASHBOARD])}>
					Redirect to Dashboard
				</LinkButton>
        <div className='flex-center'><SignOut /></div>
			</div>
		</div>
	)
}
