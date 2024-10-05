// lib
import { IconPath, Route } from "@/lib/constants/paths"
import auth from "@/auth"
// components
import Copyright from "@/components/content/Copyright"
import LogoFull from "@/components/content/LogoFull"
import PendingResponse from "@/components/shared/PendingResponse"
import Link from "next/link"
import { generateUrl } from "@/lib/utils"

export default async function UseVerifyPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  // const { userId, secret } = searchParams
  const sessionUser = await auth.getSessionUser()

  return (
    <div className=" flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <LogoFull />
        <div className="flex flex-col gap-3">
          <p className="mt-16 text-2xl font-bold text-center">
            Thank you {sessionUser?.name && sessionUser?.name} for creating your
            account!
          </p>
          <p className="text-center">
            If you want to use full functionality, you must verify the email
            address provided during creation account.
          </p>
        </div>
        <PendingResponse
          imageSrc={IconPath.LOADING_ANIM}
          entity="account"
          action="verification"
          msg="Check the email address provided during your account creation and click the link in the message sent by HealthCare."
        />
        <div>
          <p>Your provided email address is</p>
          <p className="text-green-500 font-semibold text-center">
            {sessionUser?.email && sessionUser?.email}
          </p>
        </div>
        <div>
          <p className="text-dark-600 text-sm text-center">
            You have 7 days to verify your account.
          </p>
          <p className="text-dark-600 text-sm text-center">
            If your verification link expires after that time, you can send a
            request for a new link.
          </p>
          <p className="text-dark-600 text-sm text-center">
            You can verify your account later by visiting your dashboard. To
            visit your dashboard click the button below.
          </p>
        </div>

        <Link
          href={generateUrl([Route.DASHBOARD_PATIENT, sessionUser?.$id])}
          className="text-white px-4 py-2 rounded-lg bg-green-500 flex-center min-w-[110px]"
        >
          Enter to dashboard
        </Link>
        <Copyright />
      </div>
    </div>
  )
}