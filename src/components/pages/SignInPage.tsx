// lib
import auth from '@/auth'
import { Images } from "@/lib/constants"
import { AuthTypes } from "@/lib/types/enums"
import Link from "next/link"
import { generateUrl } from "@/lib/utils"
import { Route } from "@/lib/constants/paths"
import { redirect } from 'next/navigation'
// components
import PageTitle from "@/components/shared/PageTitle"
import AuthForm from "@/components/forms/AuthForm"
import LogoFull from "@/components/content/Logo"
import Copyright from "@/components/content/Copyright"
import FormPageTemplate from "@/components/shared/FormPageTemplate"

export default async function SignInPage({
  searchParams,
}: {
  searchParams?: SearchParams
}) {
  const sessionUser = await auth.getSessionUser()

  if(sessionUser && sessionUser.$id) {
    redirect(generateUrl([Route.DASHBOARD]))
  }

  return (
    <FormPageTemplate image={Images.SIGN_IN_PAGE_IMAGE} classes="max-w-[480px]">
      {/* <PassKeyDialog searchParams={searchParams} /> */}
      <div className="flex flex-col justify-between grow">
        <LogoFull redirect />
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
              <span className="text-textSecondary">Don&#39;t have an account?</span>
              <span className="text-textSecondary font-semibold">Sign Up</span>
            </p>
          </Link>
        </div>
        <div className="flex justify-between">
          <Copyright />
          <p className="text-textSecondary text-xs">* required fields</p>
        </div>
      </div>
    </FormPageTemplate>
  )
}

// ***User {
//   $id: '66fa86960008afbcb5b7',
//   $createdAt: '2024-09-30T11:07:39.083+00:00',
//   $updatedAt: '2024-09-30T11:07:39.083+00:00',
//   name: 'Dawid Lotocki',
//   registration: '2024-09-30T11:07:39.077+00:00',
//   status: true,
//   labels: [],
//   passwordUpdate: '2024-09-30T11:07:39.077+00:00',
//   email: 'dawid@gmail.com',
//   phone: '',
//   emailVerification: false,
//   phoneVerification: false,
//   mfa: false,
//   prefs: {},
//   targets: [
//   {
//   $id: '66fa867b25bad00553b3',
//   $createdAt: '2024-09-30T11:07:39.154+00:00',
//   $updatedAt: '2024-09-30T11:07:39.154+00:00',
//   name: '',
//   userId: '66fa86960008afbcb5b7',
//   providerId: null,
//   providerType: 'email',
//   identifier: 'dawid@gmail.com'
// }
// ],
//   accessedAt: '2024-09-30T11:07:39.077+00:00'
// }
