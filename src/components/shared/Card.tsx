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
				'flex flex-col rounded-lg shadow-lg border border-border p-4 w-full',
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
