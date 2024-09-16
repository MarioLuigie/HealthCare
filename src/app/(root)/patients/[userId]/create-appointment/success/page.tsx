// lib
import { prepareSearchParam } from '@/lib/utils'
// components
import SuccessApointmentPage from '@/components/pages/SuccessApointmentPage'

export default function Page({
	params: { userId },
	searchParams: { appointmentId },
}: PageProps) {
	const searchParam: string = prepareSearchParam(appointmentId)
	return <SuccessApointmentPage appointmentId={searchParam} userId={userId} />
}
