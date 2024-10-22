// modules
import clsx from 'clsx'
// components
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import React from 'react'

type AccordionCardProps = {
	children: React.ReactNode
	className?: string
	title?: string
	trigger?: string | React.ReactNode
}

export default function AccordionCard({
	children,
	className,
	title,
	trigger,
}: AccordionCardProps) {
	return (
		<div className="space-y-1">
			{title && (
				<p className="card-extitle" onClick={(e) => e.stopPropagation()}>
					{title}
				</p>
			)}
			<Accordion
				type="single"
				collapsible
				className={clsx(
					'bg-card rounded-lg border border-border shadow-lg',
					className
				)}
			>
				<AccordionItem value="item-1" className="border-b-0">
					<AccordionTrigger className="text-dark-600 p-2 rounded-md hover:no-underline hover:bg-hover transition duration-300 ease-in-out">
						<div className="text-start">{trigger}</div>
					</AccordionTrigger>
					<AccordionContent
						className="p-4 pb-6 flex flex-col max-h-cardsMaxHeight"
						onClick={(e) => e.stopPropagation()}
					>
						{children}
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}
