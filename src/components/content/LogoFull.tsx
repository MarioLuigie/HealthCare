// modules
import Image from 'next/image'
import Link from 'next/link'
// lib
import { Icons } from '@/lib/constants'
import { Route } from '@/lib/constants/paths'

export default function LogoFull() {
	return (
		<Link href={Route.HOME}>
			<Image
				src={Icons.LOGO_FULL.path}
				height={1000}
				width={1000}
				alt={Icons.LOGO_FULL.alt}
				className="mb-12 h-10 w-fit"
			/>
		</Link>
	)
}
