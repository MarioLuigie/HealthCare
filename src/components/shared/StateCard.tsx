import { Status } from '@/lib/types/enums'
import clsx from 'clsx'
import Image from 'next/image'
import { StatusConfig } from '@/lib/constants'

type StateCardProps = {
	status: Status
	count: number
	icon: Icons
}

export default function StateCard({
	status,
	count,
	icon,
}: StateCardProps) {
	const statusBgImage: { [key in Status]: string } = {
		[Status.SCHEDULED]: StatusConfig.Scheduled.bgImage,
		[Status.PENDING]: StatusConfig.Pending.bgImage,
		[Status.CANCELLED]: StatusConfig.Cancelled.bgImage,
		[Status.FINISHED]: StatusConfig.Finished.bgImage,
	}

	return (
		<div className={clsx('stat-card', statusBgImage[status])}>
			<div className="flex gap-4 items-start">
				<Image
					src={icon.path}
					alt={icon.alt}
					width={32}
					height={32}
					className="size-8 w-fit"
				/>
				<h2 className="text-32-bold text-zinc-200">{count}</h2>
			</div>
			<p className="text-14-regular text-zinc-400">{status} Appointments</p>
		</div>
	)
}
