// modules
import { redirect } from "next/navigation"
// lib
import { Videos } from "@/lib/constants"
import { Route } from "@/lib/constants/paths"
import { generateUrl } from "@/lib/utils"
import { SearchParamsString } from "@/lib/types/enums"
import auth from "@/auth"
// components
import PageTitle from "@/components/shared/PageTitle"
import LogoFull from "@/components/content/LogoFull"
import Copyright from "@/components/content/Copyright"
import FormPageTemplate from "@/components/shared/FormPageTemplate"
import PassKeyDialog from "@/components/dialogs/PassKeyDialog"
import LinkButton from "@/components/shared/buttons/LinkButton"

export default async function HomePage({
  searchParams,
}: {
  searchParams?: SearchParams
}) {
  {
    /* TODO: OTP Verification | PassKey Modal  */
  }
  const sessionUser = await auth.getSessionUser()

  if (sessionUser && sessionUser.$id) {
    redirect(generateUrl([Route.DASHBOARD]))
  }

  return (
    <FormPageTemplate
      video={Videos.HOME_PAGE_VIDEO}
      classes="max-w-[480px]"
      isVideo
    >
      <PassKeyDialog searchParams={searchParams} />
      <div className="flex flex-col justify-between grow">
        <LogoFull redirect />
        <div>
          <PageTitle
            title="Hi there !"
            description="Get started with your HealthCare application."
            classes="my-12"
          />
          <div className="flex gap-4">
            <LinkButton href={generateUrl([Route.SIGN_IN])} variant="fill">
              Sign In
            </LinkButton>
            <LinkButton href={generateUrl([Route.SIGN_UP])} variant="outline">
              Sign Up
            </LinkButton>
          </div>
        </div>
        <Copyright>
          <LinkButton
            href={generateUrl([Route.HOME], {
              admin: SearchParamsString.TRUE,
            })}
            variant="text"
          >
            Admin
          </LinkButton>
        </Copyright>
      </div>
    </FormPageTemplate>
  )
}
