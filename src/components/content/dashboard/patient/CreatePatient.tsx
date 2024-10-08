import LinkButton from '@/components/shared/buttons/LinkButton'
import { Images } from '@/lib/constants'
import { Route } from '@/lib/constants/paths'
import { generateUrl } from '@/lib/utils'
import Image from 'next/image'
import CreatePatientButton from './CreatePatientButton'

type CreatePatientProps = {
	sessionUser?: any
}

export default function CreatePatient({ sessionUser }: CreatePatientProps) {
	return (
		<div className="flex flex-col items-center gap-6">
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
			<div className="flex-center mt-8">
				<CreatePatientButton
					sessionUser={sessionUser}
				>
					Create Patient Profile
				</CreatePatientButton>

				{/* <LinkButton
					href={generateUrl([
						Route.PATIENTS,
						sessionUser.$id,
						Route.REGISTER,
					])}
					variant="fill"
				>
					Create Patient Profile
				</LinkButton> */}
			</div>
		</div>
	)
}
