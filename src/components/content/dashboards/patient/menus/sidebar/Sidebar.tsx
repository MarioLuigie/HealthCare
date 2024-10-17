'use client'
// components
import SidebarMenu from '@/components/content/dashboards/patient/menus/sidebar/MainManu'
import Card from '@/components/shared/Card'

export default function Sidebar() {
	return (
		<div className="h-full overflow-hidden flex flex-col">
			<div className="w-full min-h-[50px] max-h-[50px] flex items-end">
				<p className="pl-4 pb-[4px]">Menu</p>
			</div>
			<div className="overflow-auto remove-scrollbar space-y-4 px-4 w-full min-w-[320px]">
				<SidebarMenu />

				<div className="space-y-2">
					<p className="text-xs text-textSecondary">Test Information</p>
					<Card className="w-full h-[200px] rounded-xl p-4 bg-card">
						<p className="text-sm">Test Content</p>
					</Card>
				</div>

				<div className="space-y-2">
					<p className="text-xs text-textSecondary">Test Information</p>
					<Card className="w-full h-[200px] rounded-xl p-4 bg-card">
						<p className="text-sm">Test Content</p>
					</Card>
				</div>
			</div>
		</div>
	)
}
