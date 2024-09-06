import RegistrationPage from '@/components/pages/RegistrationPage'

export default function Page({ params: { userId } }: UrlParams) {
	return <RegistrationPage userId={userId} />
}
