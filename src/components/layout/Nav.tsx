// lib
import auth from '@/auth'
import { getPatient } from '@/lib/actions/patient.actions'
// components
import Topbar from '@/components/content/dashboards/patient/menus/topbar/Topbar'
import GlobalSearch from '@/components/search/GlobalSearch'

export default async function Nav() {
	const sessionUser = await auth.getSessionUser()
	const { data: patient } = await getPatient(sessionUser.$id)

	return (
		<nav className="flex flex-col px-4">
			<div className="min-h-minAsideTitleHeight max-h-maxAsideTitleHeight">
				<GlobalSearch />
			</div>
			<Topbar user={sessionUser} patient={patient} />
		</nav>
	)
}
