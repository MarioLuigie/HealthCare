// components
import CustomSheet from '@/components/shared/CustomSheet'
import { Sidebar } from '@/components/content/dashboards/patient/menus/sidebar/Sidebar'

function SheetTrigger() {
	return (
		<div className="relative z-50">
			<div className="text-3xl p-2 focus:outline-none">&#9776;</div>
		</div>
	)
}

export default function SideBarMenuMobil() {
	return (
		<div className="lg:hidden">
			<CustomSheet
				trigger={<SheetTrigger />}
				title="Menu"
				className="overflow-auto remove-scrollbar bg-backgroundTransparent backdrop-blur-sm border-r-0 p-4 pt-6"
			>
				<Sidebar />
			</CustomSheet>
		</div>
	)
}
