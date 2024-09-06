// modules
import Image from 'next/image'
import Link from 'next/link'
// lib
import { icons, images } from '@/lib/constants'
// components
import PatientForm from '@/components/forms/PatientForm'


export default function RegistrationPage() {
	return (
		<div className="flex h-screen max-h-screen">
			{/* TODO: OTP Verification | PassKey Modal  */}
			<section className="remove-scrollbar container my-auto">
				<div className="sub-container max-w-[496px]">
					<Image
						src={icons.LOGO_FULL.path}
						height={1000}
						width={1000}
						alt={icons.LOGO_FULL.alt}
						className="mb-12 h-10 w-fit"
						priority
					/>
					{/* <UserForm /> */}
					<div className="flex justify-between text-14-regular mt-20">
						<p className="justify-items-end text-dark-600 xl:text-left">
							© 2024 HealthCare by ARWcode
						</p>
						<Link href="/?admin=true" className="text-green-500">
							Admin
						</Link>
					</div>
				</div>
			</section>
			<section className="max-w-[50%]">
				<Image
					src={images.REGISTER_PAGE_IMAGE.path}
					height={1000}
					width={1000}
					alt={images.REGISTER_PAGE_IMAGE.alt}
					className="side-img"
					priority
				/>
			</section>
		</div>
	)
}