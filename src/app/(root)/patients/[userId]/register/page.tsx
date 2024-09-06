import RegistrationPage from '@/components/pages/RegistrationPage'

export default function Page({ params: { userId } }: { params: any }) {
	return <RegistrationPage userId={userId} />
}
