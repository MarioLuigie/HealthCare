'use client'
// lib
import { MainMenuItems } from '@/lib/constants/menus'
// components
import MainMenuItem from '@/components/content/dashboards/patient/menus/sidebar/MainMenuItem'
import Card from '@/components/shared/cards/Card'

export default function MainMenu() {
	return (
		<div className="space-y-1 w-full">
			<p className="text-xs text-textSecondary">Dashboard Managment</p>
			<Card className='bg-card'>
				<nav className="text-sm rounded-xl">
					<ul className="space-y-3">
						{MainMenuItems.map((item, index) => (
							<li key={index} className="flex flex-col">
								<div className="flex items-center">
									<MainMenuItem
										name={item.name}
										icon={item.icon}
										subMainMenu={item.subMainMenu}
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
