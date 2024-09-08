// modules
import Image from 'next/image'
// lib
import { icons } from '@/lib/constants'

export default function LogoFull() {
	return (
		<Image
			src={icons.LOGO_FULL.path}
			height={1000}
			width={1000}
			alt={icons.LOGO_FULL.alt}
			className="mb-12 h-10 w-fit"
		/>
	)
}
