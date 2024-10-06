// lib
import { updateUserVerification } from "@/lib/actions/auth.actions"
import { Route, IconPath } from "@/lib/constants/paths"
import { generateUrl } from "@/lib/utils"
import auth from "@/auth"
// components
import Loader from "@/components/shared/Loader"
import RedirectWithDelay from "@/components/shared/RedirectWithDelay"
import Copyright from "@/components/content/Copyright"
import LogoFull from "@/components/content/LogoFull"
import SuccessResponse from "@/components/shared/SuccessResponse"
import FailedResponse from "@/components/shared/FailedResponse"
import LinkButton from "@/components/shared/buttons/LinkButton"

type VerificationResult = {
  success: boolean
  message?: string
  code?: number
}

export default async function UserVerifiedPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const { userId, secret } = searchParams
  const sessionUser = await auth.getSessionUser()

  // Sprawdź weryfikację konta, jeśli userId i secret są obecne
  const verificationResult: VerificationResult =
    userId && secret
      ? await updateUserVerification(userId as string, secret as string)
      : { success: false }

  const success = verificationResult.success
  const errorCode = verificationResult.code

  const successRedirectPath = sessionUser
    ? generateUrl([Route.PATIENTS, sessionUser?.$id, Route.REGISTER])
    : generateUrl([Route.SIGN_IN])

  const failureRedirectPath = sessionUser
    ? generateUrl([Route.DASHBOARD_PATIENT, sessionUser?.$id])
    : generateUrl([Route.SIGN_IN])

  const successMessage =
    "In a few seconds you will be able to use the full functionality of your HealthCare account."
  const failureMessage =
    "Currently, you can only use the minimal functionality of your HealthCare account."

  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <LogoFull />
        {success && (
          <>
            <p className="mt-16 text-2xl font-bold text-center">
              Welcome aboard {sessionUser?.name}!
            </p>
            <RedirectWithDelay path={successRedirectPath} delay={15000}>
              <SuccessResponse
                imageSrc={IconPath.SUCCESS_ANIM}
                entity="account"
                action="verified"
                msg={successMessage}
              />
            </RedirectWithDelay>
          </>
        )}

        {!success && (
          <>
            <RedirectWithDelay path={failureRedirectPath} delay={15000}>
              <FailedResponse
                imageSrc={IconPath.FAILED_ANIM}
                entity="account"
                action="verified"
                msg={failureMessage}
              />
              {!secret && (
                <p>
                  Your verification link has expired. You will be redirected to
                  your dashboard where you can request a new verification link.
                </p>
              )}
              <p className="text-red-500">
                {errorCode &&
                  errorCode === 401 &&
                  "Your verification link has expired."}
              </p>
              <p className="text-red-500">
                {errorCode &&
                  errorCode === 429 &&
                  "Rate limit for using your verification link has been exceeded."}
              </p>
              <p className="flex-center">
                In a few seconds you will be redirected to the&nbsp;
                {sessionUser ? (
                  <LinkButton href={failureRedirectPath} variant="text">
                    Dashboard Page
                  </LinkButton>
                ) : (
                  <LinkButton href={failureRedirectPath} variant="text">
                    Sign In Page
                  </LinkButton>
                )}
              </p>
            </RedirectWithDelay>
          </>
        )}
        <div className="my-20">
          <Loader />
        </div>
        <Copyright />
      </div>
    </div>
  )
}
