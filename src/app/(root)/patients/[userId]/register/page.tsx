import RegisterPage from '@/components/pages/RegisterPage'

export default function Page({ params: { userId } }: SingleSlugPageProps) {
	return <RegisterPage userId={userId} />
}
