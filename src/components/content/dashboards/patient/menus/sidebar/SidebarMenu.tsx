'use client'
// lib
import { SidebarMenuItems } from '@/lib/constants/menus'
// components
import SidebarMenuItem from '@/components/content/dashboards/patient/menus/sidebar/SidebarMenuItem'
import Card from '@/components/shared/Card'

export default function SidebarMenu() {
	return (
		<div className="space-y-2">
			<p className="text-xs text-textSecondary">Dashboard Managment</p>
			<Card className='bg-card w-full'>
				<nav className="text-sm rounded-xl">
					<ul className="space-y-3">
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
			</Card>
		</div>
	)
}
