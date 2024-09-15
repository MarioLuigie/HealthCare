import CreateAppointmentPage from '@/components/pages/CreateAppointmentPage'

export default function Page({ params: { userId } }: UrlParams) {
	return <CreateAppointmentPage userId={userId} />
}
