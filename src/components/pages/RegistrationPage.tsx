// modules
import Image from 'next/image'
// lib
import { icons } from '@/lib/constants'
// components
import PatientForm from '@/components/forms/PatientForm'


export default function RegistrationPage() {
  const user = {}
	return (
		<div className="flex h-screen max-h-screen">
			<section className="remove-scrollbar container">
				<div className="sub-container max-w-[860px] flex-1 flex-col py-10">
					<Image
						src={icons.LOGO_FULL.path}
						height={1000}
						width={1000}
						alt={icons.LOGO_FULL.alt}
						className="mb-12 h-10 w-fit"
					/>

					<PatientForm user={user} />

					<p className="copyright py-12">© 2024 HealthCare by ARWcode</p>
				</div>
			</section>
		</div>
	)
}
