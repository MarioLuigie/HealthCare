// lib
import auth from '@/auth'
// components
import LogoFull from '@/components/content/LogoFull'
import UserDropDownMenu from '@/components/content/dashboards/manipulations/UserDropDownMenu'
import SideBarMenuMobil from '@/components/content/dashboards/patient/menus/sidebar/SideBarMenuMobile'

export default async function Header() {
	const doctorDummyData = {
		name: 'Jasmine Lee',
		image: '/assets/images/dr-lee.png',
		alt: 'Dr Lee',
	}
	const breakPoint = 'lg'
	const sessionUser = await auth.getSessionUser()

	return (
		<header className="backdrop-blur-md bg-base-200/50 border-b-[1px] border-zinc-800 p-2 sm:p-6 max-sm:p-4 z-40 min-h-[90px] sticky top-0 left-0 w-full flex justify-between items-center">
			<SideBarMenuMobil />
			<LogoFull redirect />
			<div className="flex-end gap-3">
				<div className={`hidden ${breakPoint}:block`}>Welcome!</div>
				<UserDropDownMenu sessionUser={sessionUser} />
			</div>
		</header>
	)
}




{
	/**
			<header className="backdrop-blur-md bg-base-200/50 border-b-[1px] border-zinc-800 p-2 sm:p-6 max-sm:p-4 z-40 min-h-[90px] sticky top-0 left-0 w-full grid grid-cols-3 items-center">
			<LogoFull redirect />
			<Logo redirect />
			<div className="flex"></div>
			<div className="flex-end gap-3">
				<div className='hidden sm:block'>Welcome!</div>
				<UserDropDownMenu sessionUser={sessionUser} />
			</div>
		</header>
	*/
}
