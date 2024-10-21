// components
import MainManu from '@/components/content/dashboards/patient/menus/sidebar/MainManu'
import AsideTitle from '@/components/shared/AsideTitle'
import Card from '@/components/shared/cards/Card'

export default function Sidebar() {
	return (
		<div className="h-full overflow-hidden flex flex-col min-w-sidebarMinWidth">
			<AsideTitle title="Menu" />
			<div className="overflow-auto remove-scrollbar space-y-4 px-4 w-full">
				<MainManu />

				<Card
					className="w-full h-[200px] rounded-xl p-4 bg-card"
					extitle="Test Information"
				>
					<p className="text-sm">Test Content</p>
				</Card>

				<Card
					className="w-full h-[200px] rounded-xl p-4 bg-card"
					extitle="Test Information"
				>
					<p className="text-sm">Test Content</p>
				</Card>
			</div>
		</div>
	)
}
