import auth from "@/auth"

export default async function PatientDashboardPage({
  params,
}: {
  params: SingleSlugParams
}) {
  const { role, id } = params
  const isUserVerified: boolean = await auth.checkIsUserVerified()

  return (
    <div className="flex flex-col items-center justify-center grow">
      {isUserVerified ? (
        <div className="text-green-400 text-3xl">User verified with successfully!</div>
      ) : (
        <div className="text-red-400 text-3xl">User not verified!</div>
      )}
    </div>
  )
}
