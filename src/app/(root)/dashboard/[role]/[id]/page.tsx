// lib
import { Roles } from '@/lib/types/enums'
// components
import AdminDashboard from '@/components/pages/dashboards/AdminDashboardPage'
import PatientDashboard from '@/components/pages/dashboards/PatientDashboardPage'
import DoctorDashboard from '@/components/pages/dashboards/DoctorDashboardPage'

export default function Page({ params }: SingleSlugPageProps) {
	const { role } = params
	if (role === Roles.ADMIN) {
		return <AdminDashboard params={params} />
	} else if (role === Roles.DOCTOR) {
		return <DoctorDashboard params={params} />
	} else if (role === Roles.PATIENT) {
		return <PatientDashboard params={params} />
	} else {
		return <div>Invalid role or user not found!</div>
	}
}
