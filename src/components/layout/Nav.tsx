// components
import Topbar from '@/components/content/dashboards/patient/menus/topbar/Topbar'
import GlobalSearch from '@/components/search/GlobalSearch'

export default function Nav() {
	return (
		<nav className="flex flex-col px-4">
			<div className="min-h-minAsideTitleHeight max-h-maxAsideTitleHeight">
				<GlobalSearch />
			</div>
			<Topbar />
		</nav>
	)
}
