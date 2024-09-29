import Loader from '@/components/shared/Loader'

export default function VerifyAccountPage({ searchParams }: { searchParams: SearchParams}) {
  const { userId, secret } = searchParams
	return (
		<div className="flex flex-col items-center justify-center min-h-screen grow">
			<Loader />
		</div>
	)
}