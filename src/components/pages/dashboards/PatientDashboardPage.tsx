// modules
import auth from "@/auth"
// lib
import { createUserVerification } from "@/lib/actions/auth.actions"
import { generateUrl } from "@/lib/utils"
import { Route } from "@/lib/constants/paths"
// components
import BasicButton from "@/components/shared/buttons/BasicButton"
import LinkButton from "@/components/shared/buttons/LinkButton"

export default async function PatientDashboardPage({
  params,
}: {
  params: SingleSlugParams
}) {
  const { role, id } = params
  const isSessionUserVerified: boolean = await auth.checkIsSessionUserVerified()
  const sessionUser = await auth.getSessionUser()
  // const patient = await getPatient(sessionUser.userId) or (sessionUser.$id)
  // LinkButton with create patient profile action visible when patient not exist

  return (
    <div className="flex flex-col items-center justify-center grow">
      {isSessionUserVerified && (
        <div className="flex flex-col gap-6">
          <div className="text-green-400 text-3xl">
            User verified with successfully!
          </div>
          <div className="flex-center">
            <LinkButton
              href={generateUrl([
                Route.PATIENTS,
                sessionUser.$id,
                Route.REGISTER,
              ])}
              variant="fill"
            >
              Create Patient Profile
            </LinkButton>
          </div>
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
