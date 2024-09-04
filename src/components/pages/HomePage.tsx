import Image from 'next/image'
import { images } from '@/lib/constants'
import PatientForm from '@/components/forms/PatientForm'
import Link from 'next/link'

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
						priority
					/>
					<PatientForm />
					<div className="flex justify-between text-14-regular mt-20">
						<p className="justify-items-end text-dark-600 xl:text-left">
							© 2024 HealthCare
						</p>
						<Link href="/?admin=true" className="text-green-500">
							Admin
						</Link>
					</div>
				</div>
			</section>
			<section className="max-w-[50%]">
				<Image
					src={images.HOME_PAGE_IMAGE.path}
					height={1000}
					width={1000}
					alt="patient"
					className="side-img"
					priority
				/>
			</section>
		</div>
	)
}
