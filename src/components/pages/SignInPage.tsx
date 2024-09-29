// lib
import { Images } from "@/lib/constants"
// components
import PageTitle from "@/components/shared/PageTitle"
import AuthForm from "@/components/forms/AuthForm"
import LogoFull from "@/components/content/LogoFull"
import Copyright from "@/components/content/Copyright"
import FormPageTemplate from "@/components/shared/FormPageTemplate"
import { AuthTypes } from "@/lib/types/enums"
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
          <AuthForm actionType={AuthTypes.SIGN_IN}/>
        </div>
        <Copyright />
      </div>
    </FormPageTemplate>
  )
}
