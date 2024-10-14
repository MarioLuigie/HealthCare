'use client'
// components
import SidebarMenu from '@/components/content/dashboards/patient/menus/sidebar/SidebarMenu'

export function Sidebar() {
	return (
		<div className="overflow-auto remove-scrollbar space-y-4">
			<SidebarMenu />
			<div className="space-y-2">
				<p className="text-xs text-muted-foreground">Test Information</p>
				<div className="w-full h-[200px] rounded-xl p-4 bg-card">
					<p className='text-sm'>Test Content</p>
				</div>
			</div>
			<div className="space-y-2">
				<p className="text-xs text-muted-foreground">Test Information</p>
				<div className="w-full h-[200px] rounded-xl p-4 bg-card">
					<p className='text-sm'>Test Content</p>
				</div>
			</div>
		</div>
	)
}
