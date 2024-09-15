// lib
import { prepareSearchParam } from '@/lib/utils'
// components
import HomePage from '@/components/pages/HomePage'

export default function Page({ searchParams: { adminDashboard } }: UrlParams) {
	const searchParam =
		adminDashboard !== undefined
			? prepareSearchParam(adminDashboard)
			: undefined
	return <HomePage adminDashboard={searchParam} />
}
