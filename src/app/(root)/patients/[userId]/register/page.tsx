import RegisterPage from '@/components/pages/RegisterPage'

export default function Page({ params: { userId } }: UrlParams) {
	return <RegisterPage userId={userId} />
}
