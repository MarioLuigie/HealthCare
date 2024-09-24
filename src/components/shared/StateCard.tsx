import { Status } from '@/lib/types/enums'
import clsx from 'clsx'
import { StatusConfig } from '@/lib/constants'
import SVGImage from '@/components/shared/SvgImage'

type StateCardProps = {
	status: Status
	count: number
}

export default function StateCard({ status, count }: StateCardProps) {
	const { bgImage, textColor, icon } = StatusConfig[status] || {}

	// const statusBgImage: { [key in Status]: string } = {
	// 	[Status.SCHEDULED]: StatusConfig.Scheduled.bgImage,
	// 	[Status.PENDING]: StatusConfig.Pending.bgImage,
	// 	[Status.CANCELLED]: StatusConfig.Cancelled.bgImage,
	// 	[Status.FINISHED]: StatusConfig.Finished.bgImage,
	// }

	return (
		<div className={clsx('stat-card', bgImage)}>
			<div className="flex gap-4 items-start">
				<SVGImage src={icon} width={34} height={34} className={textColor} />
				<h2 className="text-32-bold text-zinc-200">{count}</h2>
			</div>
			<p className="text-14-regular text-zinc-400">{status} Appointments</p>
		</div>
	)
}
