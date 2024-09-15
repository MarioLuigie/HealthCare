// modules
import Image from 'next/image'
import Link from 'next/link'
// lib
import { formatDateTime } from '@/lib/utils'
import { doctors } from '@/lib/constants'
import { getAppointment } from '@/lib/actions/appointment.actions'
import { IconPath } from '@/lib/constants/paths'
// components
import { Button } from '@/components/ui/button'
import Copyright from '@/components/content/Copyright'
import LogoFull from '../content/LogoFull'
import SuccessRes from '@/components/shared/SuccessRes'

export default async function SuccessApointmentPage({
	appointmentId,
	userId,
}: {
	appointmentId: string
	userId: string
}) {
	const appointment = await getAppointment(appointmentId)

  console.log("APPOINTMENT:", appointment)

	const doctor = doctors.find((doctor) => {})

	return (
		<div className=" flex h-screen max-h-screen px-[5%]">
			<div className="success-img">
				<LogoFull />
				<SuccessRes
					imageSrc={IconPath.SUCCESS_GIF}
					entity="appointment request"
					msg="We'll be in touch shortly to confirm."
				/>
				<section className="request-details">
					<p>Requested appointment details: </p>
					<div className="flex items-center gap-3">
						<Image
							src={doctor?.image!}
							alt="doctor"
							width={100}
							height={100}
							className="size-6"
						/>
						<p className="whitespace-nowrap">Dr. {doctor?.name}</p>
					</div>
					<div className="flex gap-2">
						<Image
							src="/assets/icons/calendar.svg"
							height={24}
							width={24}
							alt="calendar"
						/>
						<p> {formatDateTime(appointment.schedule).dateTime}</p>
					</div>
				</section>

				<Button variant="outline" className="shad-primary-btn" asChild>
					<Link href={`/patients/${userId}/new-appointment`}>
						New Appointment
					</Link>
				</Button>
				<Copyright />
			</div>
		</div>
	)
}
