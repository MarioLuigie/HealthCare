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
		<Card className={cn('bg-card min-w-[200px] min-h-[160px]', className)} {...rest}>
			{children}
		</Card>
	)
}
