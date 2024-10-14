import { Status } from '@/lib/types/enums'
import { StatusConfig } from '@/lib/constants'
import SVGImage from '@/components/shared/SvgImage'
import Card from '@/components/shared/Card'

type AppointmentsStateCard = {
	status: Status
	count: number | null
}

export default function AppointmentsStateCard({ status, count }: AppointmentsStateCard) {
	const { bgImage, textColor, icon } = StatusConfig[status]

	// const statusBgImage: { [key in Status]: string } = {
	// 	[Status.SCHEDULED]: StatusConfig.Scheduled.bgImage,
	// 	[Status.PENDING]: StatusConfig.Pending.bgImage,
	// 	[Status.CANCELLED]: StatusConfig.Cancelled.bgImage,
	// 	[Status.FINISHED]: StatusConfig.Finished.bgImage,
	// }

	return (
		<Card className={`${bgImage}`}>
			<div className="flex gap-4 items-start">
				<SVGImage src={icon} width={34} height={34} className={textColor} />
				<h2 className="text-32-bold text-zinc-200">{count}</h2>
			</div>
			<p className="text-14-regular text-zinc-400">{status} Appointments</p>
		</Card>
	)
}
