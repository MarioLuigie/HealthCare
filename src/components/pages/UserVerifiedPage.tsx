// lib
import { verifyUser } from "@/lib/actions/auth.actions"
import { Route, IconPath } from "@/lib/constants/paths"
import { generateUrl, prepareSearchParam } from "@/lib/utils"
import auth from "@/auth"
// components
import Loader from "@/components/shared/Loader"
import RedirectWithDelay from "@/components/shared/RedirectWithDelay"
import Copyright from "@/components/content/Copyright"
import LogoFull from "@/components/content/LogoFull"
import SuccessResponse from "@/components/shared/SuccessResponse"
import FailedResponse from "@/components/shared/FailedResponse"
import { redirect } from "next/navigation"
import Link from "next/link"

export default async function UserVerifiedPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const { userId, secret } = searchParams
  const sessionUser = await auth.getSessionUser()

  const success: boolean =
    userId && secret
      ? (await verifyUser(userId as string, secret as string)).success
      : false

  // if (!userId || !secret) {
  // 	success = false
  // } else {
  // 	const result = await verifyAccount(userId as string, secret as string)
  // 	success = result.success
  // }

  return (
    <div className=" flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <LogoFull />
        {success && (
          <p className="mt-16 text-2xl font-bold text-center">
            Welcome aboard {sessionUser?.name && sessionUser?.name} !
          </p>
        )}
        {success ? (
          <RedirectWithDelay
            path={generateUrl([
              Route.PATIENTS,
              sessionUser?.$id,
              Route.REGISTER,
            ])}
            delay={15000}
          >
            <SuccessResponse
              imageSrc={IconPath.SUCCESS_ANIM}
              entity="account"
              action="verified"
              msg="In a few seconds you will be able to use the full functionality of your HealthCare account."
            />
          </RedirectWithDelay>
        ) : (
          <RedirectWithDelay
            path={generateUrl([Route.DASHBOARD_PATIENT, sessionUser?.$id])}
            delay={15000}
          >
            <FailedResponse
              imageSrc={IconPath.FAILED_ANIM}
              entity="account"
              action="verified"
              msg="Currently, you can only use the minimal functionality of your HealthCare account."
            />
            {!secret && (
              <p>
                Your verification link has expired, in a few seconds you will be
                redirected to your dashboard page where you will be able to send
                a request to verify your account again.
              </p>
            )}
            {userId && secret && (
              <p>
                In a few seconds you will be redirected to your dashboard page.
              </p>
            )}
          </RedirectWithDelay>
        )}
        <div className="my-20">
          <Loader />
        </div>
        <Copyright />
      </div>
    </div>
  )
}

// 	return (
// 		<div className="flex flex-col items-center justify-center min-h-screen grow">
// 			<Loader />
// 			{true && (
// 				<RedirectWithDelay
// 					path={generateUrl([Route.SIGN_IN])}
// 					delay={60000}
// 				>
// 					<p className='text-5xl font-bold text-green-500'>Your account has been successfully verified!</p>
// 					<p>
// 						You will be able to use the full functionality of your
// 						HealthCare account shortly.
// 					</p>
// 				</RedirectWithDelay>
// 			)}
// 			{(false) && (
// 				<p>Invalid verification link. Please, try again.</p>
// 			)}
// 		</div>
// 	)
// }
