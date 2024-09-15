import SuccessApointmentPage from '@/components/pages/SuccessApointmentPage'

export default function Page({
	params: { userId },
	searchParams: { appointmentId },
}: UrlParams) {
	return <SuccessApointmentPage appointmentId={appointmentId} userId={userId} />
}
