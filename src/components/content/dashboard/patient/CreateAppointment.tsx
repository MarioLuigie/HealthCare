// modules
import Image from 'next/image'
// lib
import { Images } from '@/lib/constants'
import { Route } from '@/lib/constants/paths'
import { generateUrl } from '@/lib/utils'
// components
import LinkButton from '@/components/shared/buttons/LinkButton'
import CreateAppointmentButton from '@/components/content/dashboard/patient/CreateAppointmentButton'

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
				width={470}
				height={470}
			/>
			<p className="text-green-400 text-4xl font-bold text-center">
				Create Appointment with Doctor!
			</p>
			<p className="max-w-[500px] text-center text-dark-600 text-xs">
				You can choose a doctor, date and time of your planned appointment.
				Don&lsquo;t forget to describe what ails you.
			</p>
			<div className="flex-center mt-8">
				<CreateAppointmentButton sessionUser={sessionUser}>
					Create Appointment
				</CreateAppointmentButton>
			</div>
		</div>
	)
}
