// lib
import auth from '@/auth'
// components
import LogoFull from '@/components/content/LogoFull'
import PersonAvatar from '@/components/shared/PersonAvatar'
import SignOut from '@/components/shared/SignOut'

export default async function Header({ params }: { params: SingleSlugParams }) {
	const dummyData = {
		name: 'Jasmine Lee',
		image: '/assets/images/dr-lee.png',
		alt: 'Dr Lee',
	}
	const sessionUser = await auth.getSessionUser()
	return (
		<header className="backdrop-blur-md bg-base-200/50 border-b-[1px] border-zinc-800 p-6 max-sm:p-4 z-40 min-h-[90px] sticky top-0 left-0 w-full grid grid-cols-3 items-center">
			<LogoFull />
			<div className="flex"></div>
			<div className="flex-end gap-3">
				<div>Welcome 👋,</div>
				<PersonAvatar person={dummyData} />
				<div className='pl-4'>
					<SignOut />
				</div>
			</div>
		</header>
	)
}
