// modules
import Image from 'next/image'
import Link from 'next/link'
// lib
import { formatDateTime, generateUrl, prepareSearchParam } from '@/lib/utils'
import { Icons, doctors } from '@/lib/constants'
import { getAppointment } from '@/lib/actions/appointment.actions'
import { IconPath, Route } from '@/lib/constants/paths'
// components
import { Button } from '@/components/ui/button'
import Copyright from '@/components/content/Copyright'
import LogoFull from '@/components/content/LogoFull'
import SuccessResponse from '@/components/shared/SuccessResponse'

export default async function SuccessApointmentPage({
	params,
	searchParams,
}: {
	params: SingleSlugParams
	searchParams: SearchParams
}) {
	const userId: string = params.userId
	const appointmentId: string = prepareSearchParam(searchParams.appointmentId)

	const appointment = await getAppointment(appointmentId)

	const doctor = doctors.find(
		(doctor) => doctor.name === appointment.primaryPhysician
	)

	return (
		<div className=" flex h-screen max-h-screen px-[5%]">
			<div className="success-img">
				<LogoFull />
				<SuccessResponse
					imageSrc={IconPath.SUCCESS_ANIM}
					entity="appointment request"
					msg="We'll be in touch shortly to confirm."
					action='submitted'
				/>
				<section className="request-details">
					<p>Requested appointment details: </p>
					<div className="flex items-center gap-3">
						<Image
							src={doctor?.image!}
							alt="doctor"
							width={100}
							height={100}
							className="size-10"
						/>
						<p className="whitespace-nowrap">Dr. {doctor?.name}</p>
					</div>
					<div className="flex gap-2">
						<Image
							src={Icons.CALENDAR_ICON.path}
							height={24}
							width={24}
							alt={Icons.CALENDAR_ICON.alt}
						/>
						<p> {formatDateTime(appointment.schedule).dateTime}</p>
					</div>
				</section>
				<Button variant="outline" className="shad-primary-btn" asChild>
					<Link
						href={generateUrl([
							Route.PATIENTS,
							userId,
							Route.CREATE_APPOINTMENT,
						])}
					>
						Create Next Appointment
					</Link>
				</Button>
				<Copyright />
			</div>
		</div>
	)
}
