// modules
import Link from "next/link"
// lib
import { Images, Videos } from "@/lib/constants"
import { Route } from "@/lib/constants/paths"
import { generateUrl } from "@/lib/utils"
import { SearchParamsString } from "@/lib/types/enums"
// components
import PageTitle from "@/components/shared/PageTitle"
// import UserForm from '@/components/forms/UserForm'
import LogoFull from "@/components/content/LogoFull"
import Copyright from "@/components/content/Copyright"
import FormPageTemplate from "@/components/shared/FormPageTemplate"
import PassKeyDialog from "@/components/dialogs/PassKeyDialog"

export default function HomePage({
  searchParams,
}: {
  searchParams?: SearchParams
}) {
  {
    /* TODO: OTP Verification | PassKey Modal  */
  }

  return (
    <FormPageTemplate video={Videos.HOME_PAGE_VIDEO} classes="max-w-[480px]" isVideo>
      <PassKeyDialog searchParams={searchParams} />
      <div className="flex flex-col justify-between grow">
        <LogoFull />
        <div>
          <PageTitle
            title="Hi there !"
            description="Get started with your HealthCare application."
            classes="my-12"
          />
          <div className="flex gap-4">
            <Link
              href={generateUrl([Route.SIGN_IN])}
              className="text-white px-4 py-2 rounded-lg bg-green-500 flex-center min-w-[110px]"
            >
              Sign In
            </Link>
            <Link
              href={generateUrl([Route.SIGN_UP])}
              className="text-white px-4 py-2 rounded-lg bg-transparent flex-center border border-gray-500 min-w-[110px]"
            >
              Sign Up
            </Link>
          </div>
        </div>
        <Copyright>
          <Link
            href={generateUrl([Route.HOME], {
              admin: SearchParamsString.TRUE,
            })}
            className="text-green-500"
          >
            Admin
          </Link>
        </Copyright>
      </div>
    </FormPageTemplate>
  )
}
