// modules
import Image from 'next/image'
// lib
import { icons, images } from '@/lib/constants'
import { getUser } from '@/lib/actions/user.actions'
// components
import PatientForm from '@/components/forms/PatientForm'
import PageTitle from '@/components/shared/PageTitle'

export default async function RegistrationPage({ userId }: { userId: string }) {
	const user = await getUser(userId)

	console.log('User from RegistrationPage:', user)
	return (
		<div className="flex h-screen max-h-screen">
			<section className="remove-scrollbar container my-auto max-h-screen overflow-y-auto">
				<div className="sub-container max-w-[780px]">
					<Image
						src={icons.LOGO_FULL.path}
						height={1000}
						width={1000}
						alt={icons.LOGO_FULL.alt}
						className="mb-12 h-10 w-fit"
					/>
					<PageTitle
						title="Welcome !"
						description="Let us know more about yourself."
					/>
					<PatientForm user={user} />
					<div className="flex justify-between text-14-regular mt-20">
						<p className="justify-items-end text-dark-600 xl:text-left">
							© 2024 HealthCare by ARWcode
						</p>
					</div>
				</div>
			</section>
			<section className="max-w-[33%]">
				<Image
					src={images.REGISTER_PAGE_IMAGE.path}
					height={1000}
					width={1000}
					alt={images.REGISTER_PAGE_IMAGE.alt}
					className="side-img"
				/>
			</section>
		</div>
	)
}
