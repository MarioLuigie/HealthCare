import HomePage from '@/components/pages/HomePage'
import { prepareSearchParam } from '@/lib/utils'

export default function Page({ searchParams: { adminDashboard } }: UrlParams) {
	const searchParam =
		adminDashboard !== undefined
			? prepareSearchParam(adminDashboard)
			: undefined
	return <HomePage adminDashboard={searchParam} />
}
