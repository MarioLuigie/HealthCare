// lib
import { Images } from "@/lib/constants"
import { getUser } from "@/lib/actions/auth.actions"
import { generateUrl } from "@/lib/utils"
import { Route } from "@/lib/constants/paths"
import UserVerificationProvider from "@/lib/providers/UserVerificationProvider"
// components
import PatientForm from "@/components/forms/PatientForm"
import PageTitle from "@/components/shared/PageTitle"
import LogoFull from "@/components/content/LogoFull"
import Copyright from "@/components/content/Copyright"
import FormPageTemplate from "@/components/shared/FormPageTemplate"
import LinkButton from "@/components/shared/buttons/LinkButton"

export default async function RegisterPage({
  params,
}: {
  params: SingleSlugParams
}) {
  const userId = params.userId
  const result = await getUser(userId)
  const user = result.data // !! Is well inject user from adminClient to PatientForm or get sessionUser in PatientForm directly?

  console.log("User from RegisterPage:", result)
  return (
    <UserVerificationProvider>
      <FormPageTemplate
        image={Images.REGISTER_PAGE_IMAGE}
        classes="max-w-[780px]"
      >
        <LogoFull />
        <PageTitle
          title="Welcome !"
          description="Here you can fill form to create your patient profile, from which you will be able to create and manage your appointments. You can skip this and do it later in your dashboard."
          classes="my-12"
        />
        <div className="pb-10">
          <LinkButton href={generateUrl([Route.DASHBOARD_PATIENT, userId])}>
            Skip and fill form later
          </LinkButton>
        </div>
        <PatientForm user={user} />
        <Copyright />
      </FormPageTemplate>
    </UserVerificationProvider>
  )
}

{
  /*User - result.data from RegisterPage: {
  '$id': '66fc4cc7000626833f30',
  '$createdAt': '2024-10-01T19:24:25.458+00:00',
  '$updatedAt': '2024-10-01T19:24:25.458+00:00',
  name: 'Renata Lotocka',
  password: '$argon2id$v=19$m=65536,t=4,p=3$bW9xU0FqUTZXaFAxMUE3Nw$8+ggXorYYtOj8nAIga+osPp0RyyRKoiLSEE97z+cTik',
  hash: 'argon2',
  hashOptions: { type: 'argon2', memoryCost: 2048, timeCost: 4, threads: 3 },
  registration: '2024-10-01T19:24:25.456+00:00',
  status: true,
  labels: [],
  passwordUpdate: '2024-10-01T19:24:25.456+00:00',
  email: 'renata@gmail.com',
  phone: '',
  emailVerification: false,
  phoneVerification: false,
  mfa: false,
  prefs: {},
  targets: [
    {
      '$id': '66fc4c697ebd742fa238',
      '$createdAt': '2024-10-01T19:24:25.519+00:00',
      '$updatedAt': '2024-10-01T19:24:25.519+00:00',
      name: '',
      userId: '66fc4cc7000626833f30',
      providerId: null,
      providerType: 'email',
      identifier: 'renata@gmail.com'
    }
  ],
  accessedAt: '2024-10-01T19:24:25.456+00:00'
}*/
}
