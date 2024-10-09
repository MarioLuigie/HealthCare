// components
import DashboardPage from '@/components/pages/dashboard/DashboardPage'

export default async function Page({ params }: SingleSlugPageProps) {
	return <DashboardPage params={params} />
}
