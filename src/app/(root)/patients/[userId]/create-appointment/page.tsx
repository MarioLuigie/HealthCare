import CreateAppointmentPage from '@/components/pages/CreateAppointmentPage'

export default function Page({ params: { userId } }: SingleSlugPageProps) {
	return <CreateAppointmentPage userId={userId} />
}
