export default function DoctorDashboardPage({
	params,
}: {
	params: SingleSlugParams
}) {
	const { role, id } = params
	return (
		<div className="flex flex-col items-center justify-center grow">
			<p>{role.toUpperCase()} DASHBOARD PAGE.</p>
      <p className="text-sm text-dark-600">{role.toUpperCase()} ID: {id}</p>
		</div>
	)
}
