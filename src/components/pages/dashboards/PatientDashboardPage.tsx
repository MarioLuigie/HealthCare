// modules
import auth from "@/auth"
// lib
import { createUserVerification } from '@/lib/actions/auth.actions'
// components
import BasicButton from "@/components/shared/buttons/BasicButton"

export default async function PatientDashboardPage({
  params,
}: {
  params: SingleSlugParams
}) {
  const { role, id } = params
  const isSessionUserVerified: boolean = await auth.checkIsSessionUserVerified()
  const sessionUser = await auth.getSessionUser()
  // const patient = await getPatient(sessionUser.userId) or (sessionUser.$id)

  return (
    <div className="flex flex-col items-center justify-center grow">
      {isSessionUserVerified && (
        <div className="text-green-400 text-3xl">
          User verified with successfully!
        </div>
      )}
      {!isSessionUserVerified && sessionUser && (
        <>
          <div className="text-red-400 text-3xl">User not verified!</div>
          <form className="mt-8" action={createUserVerification}>
            <BasicButton>Verify your Account</BasicButton>
          </form>
        </>
      )}
    </div>
  )
}
