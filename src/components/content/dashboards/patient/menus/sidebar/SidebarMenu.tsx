'use client'
// lib
import { SidebarMenuItems } from '@/lib/constants/menus'
// components
import SidebarMenuItem from '@/components/content/dashboards/patient/menus/sidebar/SidebarMenuItem'

export default function SidebarMenu() {
	return (
		<div className='space-y-2'>
			<p className='text-sm text-muted-foreground'>Dashboard Managment</p>
			<nav className="bg-card text-sm rounded-2xl p-6 overflow-auto remove-scrollbar">
				<ul className="space-y-4">
					{SidebarMenuItems.map((item, index) => (
						<li key={index} className="flex flex-col">
							<div className="flex items-center">
								<SidebarMenuItem
									name={item.name}
									icon={item.icon}
									subMenu={item.subMenu}
								/>
							</div>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}
