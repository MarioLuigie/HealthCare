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
          <AuthForm authType={AuthTypes.SIGN_UP}/>
        </div>
        <Copyright />
      </div>
    </FormPageTemplate>
  )
}
