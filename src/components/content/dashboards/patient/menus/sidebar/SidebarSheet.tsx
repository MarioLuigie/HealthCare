// components
import CustomSheet from '@/components/shared/CustomSheet'
import Sidebar from '@/components/content/dashboards/patient/menus/sidebar/Sidebar'

function SheetTrigger() {
	return (
		<div className="relative z-50">
			<div className="text-3xl p-2 focus:outline-none">&#9776;</div>
		</div>
	)
}

export default function SidebarSheet() {
	return (
		<div className="mobile">
			<CustomSheet
				trigger={<SheetTrigger />}
				className="overflow-auto remove-scrollbar bg-backgroundTransparent blur-plane border-r-0 p-4 pb-10"
			>
				<Sidebar />
			</CustomSheet>
		</div>
	)
}
