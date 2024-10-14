// modules
import Image from 'next/image'
// lib
import { Images } from '@/lib/constants'
// components
import CreatePatientButton from '@/components/content/dashboards/patient/CreatePatientButton'

type CreatePatientProps = {
	sessionUser?: any
}

export default function CreatePatient({ sessionUser }: CreatePatientProps) {
	return (
		<div className="flex flex-col items-center justify-center gap-2 h-full">
			<Image
				src={Images.PATIENT_CREATE_IMAGE.path}
				alt={Images.PATIENT_CREATE_IMAGE.alt}
				width={500}
				height={500}
			/>
			<p className="text-green-400 text-5xl font-bold text-center">
				Create your Patient Profile!
			</p>
			<p className="max-w-[500px] text-center text-dark-600 text-xs">
				Once you have created your patient profile, you will be able to
				create and manage your appointments with our doctors.
			</p>
			<div className="flex-center mt-4">
				<CreatePatientButton sessionUser={sessionUser}>
					Create Patient Profile
				</CreatePatientButton>
			</div>
		</div>
	)
}
