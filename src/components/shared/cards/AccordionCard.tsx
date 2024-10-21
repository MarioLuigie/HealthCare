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
}

export default function AccordionCard({
	children,
	className,
	title,
}: AccordionCardProps) {
	return (
		<div className="space-y-1">
			{title && <p className="card-extitle">{title}</p>}
			<Accordion
				type="single"
				collapsible
				className={clsx(
					'bg-card rounded-lg border border-border shadow-lg',
					className
				)}
			>
				<AccordionItem value="item-1" className="border-b-0">
					<AccordionTrigger className="p-2 rounded-md hover:no-underline hover:bg-hover transition duration-300 ease-in-out">
						<p className="text-start">Test</p>
					</AccordionTrigger>
					<AccordionContent className="max-h-[130px] p-2">
						{children}
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}
