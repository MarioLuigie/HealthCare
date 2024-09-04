import Image from 'next/image'
import { images } from '@/lib/constants'

export default function HomePage() {
	return (
		<div className="flex h-screen max-h-screen">
			<section className="remove-scrollbar container my-auto">
				<div className="sub-container max-w-[496px]">
					<Image
						src={images.LOGO_FULL.path}
						height={1000}
						width={1000}
						alt="patient"
						className="mb-12 h-10 w-fit"
					/>
				</div>
			</section>
		</div>
	)
}
