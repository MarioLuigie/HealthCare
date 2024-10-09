// lib
import { Roles } from '@/lib/types/enums'
import auth from '@/auth'
// components
import AdminDashboardPage from '@/components/pages/dashboard/AdminDashboardPage'
import DoctorDashboardPage from '@/components/pages/dashboard/DoctorDashboardPage'
import PatientDashboardPage from '@/components/pages/dashboard/PatientDashboardPage'

export default async function DashboardPage({
	params,
}: {
	params: SingleSlugParams
}) {
  const sessionUser = await auth.getSessionUser()
	let sessionUserRole = null
	
	if(sessionUser && sessionUser.labels) {
		sessionUserRole = sessionUser.labels[0] // !! Create func and use for get role
	} else {
		return null
	}

	switch (sessionUserRole) {
		case Roles.ADMIN:
			return <AdminDashboardPage params={params} sessionUser={sessionUser} />
		case Roles.DOCTOR:
			return <DoctorDashboardPage params={params} sessionUser={sessionUser} />
		case Roles.PATIENT:
			return <PatientDashboardPage params={params} sessionUser={sessionUser} />
	}
}