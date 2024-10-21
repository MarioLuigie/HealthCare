import { cn } from '@/lib/utils'

export default function AsideTitle({
	title,
	className,
}: {
	title: string
	className?: string
}) {
	return (
		<div
			className={cn(
				'w-full min-h-minAsideTitleHeight max-h-maxAsideTitleHeight flex items-end justify-between px-4 pb-[4px]',
				className
			)}
		>
			<p>{title}</p>
		</div>
	)
}
