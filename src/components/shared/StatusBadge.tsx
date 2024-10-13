// modules
import clsx from 'clsx'
// lib
import { Status } from '@/lib/types/enums'
import { StatusConfig } from '@/lib/constants'
import SVGImage from '@/components/shared/SvgImage'

export const StatusBadge = ({
	status,
	badge = false,
}: {
	status: Status
	badge?: boolean
}): React.ReactNode => {
	const { bgColor, textColor, icon, title } = StatusConfig[status]

	return (
		<div
			className={clsx(
				'flex items-center justify-center gap-2',
				badge && ['status-badge', bgColor]
			)}
		>
			<SVGImage src={icon} width={16} height={16} className={textColor} />
			{badge ? (
				<p className={clsx('text-12-semibold capitalize', textColor)}>
					{status.toLowerCase()}
				</p>
			) : (
				<p className={clsx('text-14-regular', textColor)}>{title}</p>
			)}
		</div>
	)
}
