import HomePage from '@/components/pages/HomePage'
import { prepareSearchParam } from '@/lib/utils'

export default function Page({ searchParams: { admin } }: UrlParams) {
	return <HomePage admin={admin as string} />
}
