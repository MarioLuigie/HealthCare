'use client'
// components
import SidebarMenu from '@/components/content/dashboards/patient/menus/sidebar/SidebarMenu'
import Card from '@/components/shared/Card'

export default function Sidebar() {
	return (
		<div className="overflow-auto remove-scrollbar space-y-4 px-4">
			<SidebarMenu />

			<div className="space-y-2">
				<p className="text-xs text-textSecondary">Test Information</p>
				<Card className="w-full h-[200px] rounded-xl p-4 bg-card">
					<p className='text-sm'>Test Content</p>
				</Card>
			</div>

			<div className="space-y-2">
				<p className="text-xs text-textSecondary">Test Information</p>
				<Card className="w-full h-[200px] rounded-xl p-4 bg-card">
					<p className='text-sm'>Test Content</p>
				</Card>
			</div>

		</div>
	)
}
