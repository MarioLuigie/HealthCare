import clsx from 'clsx'

export default function Card({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return <div className={clsx('stat-card', className)}>{children}</div>
}
