import Loader from '@/components/shared/Loader'

export default function Loading() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen grow">
			<Loader />
		</div>
	)
}
