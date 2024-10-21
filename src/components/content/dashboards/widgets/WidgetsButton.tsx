// lib
import { cn } from '@/lib/utils'

type WidgetsButtonProps = {
	children: React.ReactNode
	className?: string
}

export default function WidgetsButton({
	children,
	className,
}: WidgetsButtonProps) {
	return (
		<div
			className={cn(
				'flex-center w-[65px] min-h-widgetsMinHeight pl-[6px] rounded-l-full bg-card border border-border',
				className
			)}
		>
			{children}
		</div>
	)
}
