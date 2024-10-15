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
import LogoFull from '@/components/content/Logo'
import SuccessResponse from '@/components/shared/SuccessResponse'
import LinkButton from '../shared/buttons/LinkButton'

export default async function SuccessApointmentPage({
	params,
	searchParams,
}: {
	params: SingleSlugParams
	searchParams: SearchParams
}) {
	const userId: string = params.userId
	const appointmentId: string = prepareSearchParam(searchParams.appointmentId)

	const { data: appointment, success } = await getAppointment(appointmentId)

	if (!appointment || !success) {
		throw new Error('Appointment not found or invalid appointmentId.')
	}

	const doctor = doctors.find(
		(doctor) => doctor.name === appointment.primaryPhysician
	)

	return (
		<div className=" flex h-screen max-h-screen px-[5%]">
			<div className="success-img">
				<LogoFull redirect />
				<SuccessResponse
					imageSrc={IconPath.SUCCESS_ANIM}
					entity="appointment request"
					msg="We'll be in touch shortly to confirm."
					action="submitted"
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
				<div className="flex flex-col gap-8">
					<LinkButton
						variant="fill"
						href={generateUrl([
							Route.PATIENTS,
							userId,
							Route.CREATE_APPOINTMENT,
						])}
					>
						Create next Appointment
					</LinkButton>
					<LinkButton
						variant="outline"
						href={generateUrl([Route.DASHBOARD])}
					>
						Redirect to Dashboard
					</LinkButton>
				</div>
				<Copyright />
			</div>
		</div>
	)
}
