import clsx from 'clsx'

export default function Card({
	children,
	className,
	intitle,
	extitle,
}: {
	children?: React.ReactNode
	className?: string
	intitle?: string
	extitle?: string
}) {
	return (
		<div className="space-y-1 w-full">
			{extitle && <p className="card-extitle">{extitle}</p>}
			<div
				className={clsx(
					'flex flex-col rounded-lg shadow-lg border border-border p-4 w-full',
					className
				)}
			>
				<>
					{intitle && (
						<p className="text-sm border-b border-border">{intitle}</p>
					)}
					{children}
				</>
			</div>
		</div>
	)
}
