import LinkButton from '@/components/shared/buttons/LinkButton'
import { Images } from '@/lib/constants'
import { Route } from '@/lib/constants/paths'
import { generateUrl } from '@/lib/utils'
import Image from 'next/image'

type CreateAppointmentProps = {
	sessionUser?: any
}

export default function CreateAppointment({
	sessionUser,
}: CreateAppointmentProps) {
	return (
		<div className="flex flex-col items-center gap-6">
			<Image
				src={Images.APPOINTMENT_CREATE_IMAGE.path}
				alt={Images.APPOINTMENT_CREATE_IMAGE.alt}
				width={500}
				height={500}
			/>
			<p className="text-green-400 text-5xl font-bold text-center">
				Create Appointment with Doctor!
			</p>
			<p className="max-w-[500px] text-center text-dark-600 text-xs">
				You can choose a doctor, date and time of your planned appointment.
				Don&lsquo;t forget to describe what ails you.
			</p>
			<div className="flex-center mt-8">
				<LinkButton
					href={generateUrl([
						Route.PATIENTS,
						sessionUser?.$id,
						Route.CREATE_APPOINTMENT,
					])}
					variant="fill"
				>
					Create Appointment
				</LinkButton>
			</div>
		</div>
	)
}
