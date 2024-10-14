import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import SVGImage from '@/components/shared/SvgImage'

type SidebarMenuItemProps = {
	name: string
  icon: string
}

export default function SidebarMenuItem({ name, icon }: SidebarMenuItemProps) {
	return (
		<Accordion type="single" collapsible className="grow">
			<AccordionItem value="item-1" className="border-b-0 bg-red-300">
				<AccordionTrigger className="hover:no-underline py-2">
					<div className='flex gap-2 items-center'>
          <SVGImage src={icon} width={20} height={20} />
            <p>{name}</p>
          </div>
				</AccordionTrigger>
				<AccordionContent>
					<p>Yes. It adheres to the WAI-ARIA design pattern.</p>
					<p>Yes. It adheres to the WAI-ARIA design pattern.</p>
					<p>Yes. It adheres to the WAI-ARIA design pattern.</p>
					<p>Yes. It adheres to the WAI-ARIA design pattern.</p>
					<p>Yes. It adheres to the WAI-ARIA design pattern.</p>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
