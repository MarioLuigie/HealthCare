// modules
import Image from 'next/image'
import Link from 'next/link'
// lib
import { Icons } from '@/lib/constants'
import { Route } from '@/lib/constants/paths'

export default function Logo() {
	return (
		<Link href={Route.HOME}>
			<Image
				src={Icons.LOGO_ICON.path}
				height={1000}
				width={1000}
				alt={Icons.LOGO_ICON.alt}
				className="h-10 w-fit"
			/>
		</Link>
	)
}
