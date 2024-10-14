'use client'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import SVGImage from '@/components/shared/SvgImage'
import { useRouter } from 'next/navigation'

type SubMenuItem = {
	name: string
	path: string
	icon: string
}

type SidebarMenuItemProps = {
	name: string
	icon: string
	subMenu: SubMenuItem[]
}

export default function SidebarMenuItem({
	name,
	icon,
	subMenu,
}: SidebarMenuItemProps) {
	const router = useRouter()
	return (
		<Accordion type="single" collapsible className="grow">
			<AccordionItem value="item-1" className="border-b-0">
				<AccordionTrigger className="hover:no-underline py-2">
					<div className="flex gap-3 items-center">
						<SVGImage src={icon} width={20} height={20} />
						<p>{name}</p>
					</div>
				</AccordionTrigger>
				<AccordionContent>
					{subMenu && (
						<ul className="rounded-lg space-y-2">
							{subMenu.map((subItem, subIndex) => (
								<li key={subIndex}>
									<button
										onClick={() => router.push(subItem.path)}
										className="w-full text-left py-[4px] hover:bg-hover transition duration-300 ease-in-out rounded flex gap-3 items-center"
									>
										<SVGImage
											src={subItem.icon}
											width={20}
											height={20}
										/>
										<p>{subItem.name}</p>
									</button>
								</li>
							))}
						</ul>
					)}
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
