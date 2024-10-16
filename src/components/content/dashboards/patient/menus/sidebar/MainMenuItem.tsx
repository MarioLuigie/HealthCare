'use client'
// modules
import { useRouter } from 'next/navigation'
// components
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import SVGImage from '@/components/shared/SvgImage'

type SubMainManuItem = {
	name: string
	path: string
	icon: string
}

type MainMenuItemProps = {
	name: string
	icon: string
	subMainMenu: SubMainManuItem[]
}

export default function MainMenuItem({
	name,
	icon,
	subMainMenu,
}: MainMenuItemProps) {
	const router = useRouter()
	const gap = 3
	return (
		<Accordion type="single" collapsible className="grow">
			<AccordionItem value="item-1" className="border-b-0">
				<AccordionTrigger className="hover:no-underline p-2 hover:bg-hover transition duration-300 ease-in-out rounded-md">
					<div className={`flex items-center gap-${String(gap)}`}>
						<SVGImage src={icon} width={20} height={20} />
						<p className='text-start'>{name}</p>
					</div>
				</AccordionTrigger>
				<AccordionContent>
					{subMainMenu && (
						<ul className="rounded-lg space-y-2 ml-2">
							{subMainMenu.map((subItem, subIndex) => (
								<li key={subIndex}>
									<button
										onClick={() => router.push(subItem.path)}
										className={`w-full text-left py-[4px] rounded-md hover:bg-hover transition duration-300 ease-in-out flex items-center gap-${String(gap)}`}
									>
										<SVGImage
											src={subItem.icon}
											width={20}
											height={20}
										/>
										<p className='text-start'>{subItem.name}</p>
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
