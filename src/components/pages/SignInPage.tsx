// lib
import { Images } from "@/lib/constants"
// components
import PageTitle from "@/components/shared/PageTitle"
import AuthForm from "@/components/forms/AuthForm"
import LogoFull from "@/components/content/LogoFull"
import Copyright from "@/components/content/Copyright"
import FormPageTemplate from "@/components/shared/FormPageTemplate"
import { AuthTypes } from "@/lib/types/enums"
import Link from "next/link"
import { generateUrl } from "@/lib/utils"
import { Route } from "@/lib/constants/paths"
// import PassKeyDialog from '@/components/dialogs/PassKeyDialog'

export default function SignInPage({
  searchParams,
}: {
  searchParams?: SearchParams
}) {
  return (
    <FormPageTemplate image={Images.SIGN_IN_PAGE_IMAGE} classes="max-w-[480px]">
      {/* <PassKeyDialog searchParams={searchParams} /> */}
      <div className="flex flex-col justify-between grow">
        <LogoFull />
        <div>
          <PageTitle
            title="Sign In"
            description="Feel free to login for the app."
            classes="my-12"
          />
          <AuthForm authType={AuthTypes.SIGN_IN} />
          <Link
            href={generateUrl([Route.SIGN_UP])}
            className="text-white flex justify-end mt-6"
          >
            <p className="flex gap-2">
              <span className="text-zinc-600">Don&#39;t have an account?</span>
              <span className="text-zinc-500">Sign Up</span>
            </p>
          </Link>
        </div>
        <div className="flex justify-between">
          <Copyright />
          <p className="text-dark-600 text-xs">* required fields</p>
        </div>
      </div>
    </FormPageTemplate>
  )
}
