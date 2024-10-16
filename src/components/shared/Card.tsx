import clsx from 'clsx'

export default function Card({
	children,
	className,
	title,
}: {
	children?: React.ReactNode
	className?: string
	title?: string
}) {
	return (
		<div
			className={clsx(
				'flex flex-col max-w-[300px] min-w-[280px] min-h-[110px] rounded-xl shadow-lg border border-border p-4',
				className
			)}
		>
			<>
				{title && (
					<p className="text-sm border-b border-border pb-2">
						{title}
					</p>
				)}
				{children}
			</>
		</div>
	)
}
