import { cn } from '@/lib/utils'
import Card from '@/components/shared/cards/Card'

type NotificationCardProps = {
	extitle?: string
	intitle?: string
	children: React.ReactNode
	className?: string
}

export default function NotificationCard({
	className,
	children,
	...rest
}: NotificationCardProps) {
	return (
		<Card className={cn('bg-card min-w-[220px] min-h-[180px]', className)} {...rest}>
			{children}
		</Card>
	)
}
