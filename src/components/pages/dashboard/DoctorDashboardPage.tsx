// modules
import auth from "@/auth"

export default async function DoctorDashboardPage({
	params,
	sessionUser,
}: {
	params: SingleSlugParams
	sessionUser: any
}) {
	const role = sessionUser.labels[0]
	const id = sessionUser.userId
	// const { role, id } = params
	// const sessionUser = await auth.getSessionUser()
  // const doctor = await getDoctor(sessionUser.userId) or (sessionUser.$id)

	return (
		<div className="flex flex-col items-center justify-center grow">
			<p>{role.toUpperCase()} DASHBOARD PAGE.</p>
      <p className="text-sm text-dark-600">{role.toUpperCase()} ID: {id}</p>
		</div>
	)
}
