'use client'
import { useRouter } from 'next/navigation'
import { SidebarMenuItems } from '@/lib/constants/menus'
import SidebarMenuItem from '@/components/content/dashboards/patient/menus/sidebar/SidebarMenuItem'

export default function SidebarMenu() {
	const router = useRouter()

	return (
		<nav className="bg-card text-sm rounded-2xl py-4 px-2 overflow-auto remove-scrollbar">
			<ul className="space-y-2">
				{SidebarMenuItems.map((item, index) => (
					<li key={index} className="flex flex-col">
						<div className="flex items-center">
							<SidebarMenuItem name={item.name} icon={item.icon} />
						</div>
					</li>
				))}
			</ul>
		</nav>
	)
}
