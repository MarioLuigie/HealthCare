import SuccessApointmentPage from '@/components/pages/SuccessApointmentPage'
import { prepareSearchParam } from '@/lib/utils'

export default function Page({
	params: { userId },
	searchParams: { appointmentId },
}: UrlParams) {
	const searchParam: string = prepareSearchParam(appointmentId)

	return <SuccessApointmentPage appointmentId={searchParam} userId={userId} />
}
