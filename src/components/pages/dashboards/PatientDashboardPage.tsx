export default function PatientDashboardPage({
	params,
}: {
	params: SingleSlugParams
}) {
	const { role } = params
	return (
		<div className="flex flex-col items-center justify-center grow">
			{role.toUpperCase()} DASHBOARD PAGE
		</div>
	)
}
