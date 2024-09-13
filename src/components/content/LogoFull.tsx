// modules
import Image from 'next/image'
// lib
import { Icons } from '@/lib/constants'

export default function LogoFull() {
	return (
		<Image
			src={Icons.LOGO_FULL.path}
			height={1000}
			width={1000}
			alt={Icons.LOGO_FULL.alt}
			className="mb-12 h-10 w-fit"
		/>
	)
}
