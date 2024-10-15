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
				'flex flex-col min-w-[280px] min-h-[130px] max-h-[150px] rounded-xl p-4 bg-card shadow-lg',
				className
			)}
		>
			<>
				{title && (
					<p className="text-sm border-b border-b-dark-500 p-[2px]">
						{title}
					</p>
				)}
				{children}
			</>
		</div>
	)
}
