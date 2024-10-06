import auth from "@/auth"

export default async function PatientDashboardPage({
  params,
}: {
  params: SingleSlugParams
}) {
  const { role, id } = params
  const isSessionUserVerified: boolean = await auth.checkIsSessionUserVerified()
  const sessionUser = await auth.getSessionUser()

  return (
    <div className="flex flex-col items-center justify-center grow">
      {isSessionUserVerified && (
        <div className="text-green-400 text-3xl">
          User verified with successfully!
        </div>
      )}
      {!isSessionUserVerified && sessionUser && (
        <div className="text-red-400 text-3xl">User not verified!</div>
      )}
    </div>
  )
}
