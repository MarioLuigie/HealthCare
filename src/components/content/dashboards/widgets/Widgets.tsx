// lib
import { cn } from '@/lib/utils'
// components
import Card from '@/components/shared/cards/Card'

export default function Widgets() {
	return (
		<div
			className={cn(
				'overflow-auto remove-scrollbar space-y-4 px-4 pb-6 w-full'
			)}
		>
			{new Array(30).fill('Test').map((item, i) => (
				<Card
					key={i}
					className="p-4 rounded-md bg-card shadow-lg w-full border border-border"
					extitle="Test Information"
				>
					<p>
						Widget <span>{item}</span>
					</p>
				</Card>
			))}
		</div>
	)
}
