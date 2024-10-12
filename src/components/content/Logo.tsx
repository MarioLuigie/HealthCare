// modules
import Image from 'next/image'
import Link from 'next/link'
// lib
import { Icons } from '@/lib/constants'
import { Route } from '@/lib/constants/paths'

export default function Logo({ redirect = false }: { redirect?: boolean }) {
	const logo = (
		<Image
			src={Icons.LOGO_ICON.path}
			height={1000}
			width={1000}
			alt={Icons.LOGO_ICON.alt}
			className="h-11 w-fit"
			priority
		/>
	)

	return (
		<div className="h-10 w-fit sm:hidden">
			{redirect ? <Link href={Route.HOME}>{logo}</Link> : logo}
		</div>
	)
}
