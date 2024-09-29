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

export default function SignUpPage({
  searchParams,
}: {
  searchParams?: SearchParams
}) {
  return (
    <FormPageTemplate image={Images.SIGN_UP_PAGE_IMAGE} classes="max-w-[480px]">
      {/* <PassKeyDialog searchParams={searchParams} /> */}
      <div className="flex flex-col justify-between grow">
        <LogoFull />
        <div>
          <PageTitle
            title="Sign Up"
            description="Feel free to register for the app."
            classes="my-12"
          />
          <AuthForm authType={AuthTypes.SIGN_UP} />
          <Link
            href={generateUrl([Route.SIGN_IN])}
            className="text-white flex justify-end mt-6"
          >
            <p className="flex gap-2">
              <span className="text-zinc-600">Already have an account?</span>
              <span className="text-zinc-500">Sign In</span>
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
