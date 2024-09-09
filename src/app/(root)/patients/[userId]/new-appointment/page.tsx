import NewAppointmentPage from '@/components/pages/NewAppointmentPage'

export default function Page({ params: { userId } }: UrlParams) {
	return <NewAppointmentPage userId={userId} />
}
