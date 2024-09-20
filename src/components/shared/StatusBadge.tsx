import clsx from 'clsx'
import Image from 'next/image'

import { StatusIcon } from '@/lib/constants'
import { Status } from '@/lib/types/enums'

export const StatusBadge = ({ status }: { status: Status }) => {
	// Map colors to status
	const statusStyles = {
		[Status.SCHEDULED]: {
			bg: 'bg-green-600',
			text: 'text-green-500',
		},
		[Status.PENDING]: {
			bg: 'bg-blue-600',
			text: 'text-blue-500',
		},
		[Status.CANCELLED]: {
			bg: 'bg-red-600',
			text: 'text-red-500',
		},
		[Status.FINISHED]: {
			bg: 'bg-zinc-600',
			text: 'text-zinc-300',
		},
	}

	const { bg, text } = statusStyles[status] || {}

	return (
		<div className={clsx('status-badge', bg)}>
			<Image
				src={StatusIcon[status]}
				alt="status icon"
				width={24}
				height={24}
				className="h-fit w-3"
			/>
			<p className={clsx('text-12-semibold capitalize', text)}>
				{status.toLowerCase()}
			</p>
		</div>
	)
}
