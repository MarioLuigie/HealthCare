"use client"
// modules
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/navigation"
// lib
import { getAuthFormDefaultValues, getAuthFormSchema } from "@/lib/types/zod"
import { AuthTypes, FormFieldType } from "@/lib/types/enums"
import { Icons } from "@/lib/constants"
import { handleCreateUser } from "@/lib/handlers/auth.handlers"
import { generateUrl } from "@/lib/utils"
import { Route } from "@/lib/constants/paths"
// components
import SubmitButton from "@/components/shared/SubmitButton"
import CustomFormField from "@/components/shared/CustomFormField"
import { Form } from "@/components/ui/form"

type AuthFormProps = {
  authType: AuthTypes
}

export default function AuthForm({ authType }: AuthFormProps) {
  const router = useRouter()

  const AuthFormSchema = getAuthFormSchema(authType)

  const form = useForm<z.infer<typeof AuthFormSchema>>({
    resolver: zodResolver(AuthFormSchema),
    defaultValues: getAuthFormDefaultValues(authType),
  })

  const { isSubmitting } = form.formState

  const onSubmit: SubmitHandler<z.infer<typeof AuthFormSchema>> = async (
    userFormValues: z.infer<typeof AuthFormSchema>
  ) => {
    try {
      if (authType === AuthTypes.SIGN_UP) {


      } else if (authType === AuthTypes.SIGN_IN) {


      }
    } catch (err) {
      console.error("Error from onSubmit for AuthForm", err)
    }
  }

  // const onSubmit: SubmitHandler<z.infer<typeof AuthFormSchema>> = async (
  // 	userFormValues: z.infer<typeof AuthFormSchema>
  // ) => {
  // 	try {
  // 		const user = await handleCreateUser(userFormValues)

  // 		if (user!) {
  // 			router.push(generateUrl([Route.PATIENTS, user.$id, Route.REGISTER]))
  // 			form.reset()
  // 		} else {
  // 			console.log('Something went wrong with creating user.')
  // 		}
  // 	} catch (err) {
  // 		console.error('Error from onSubmit for UserForm', err)
  // 	}
  // }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <CustomFormField
          control={form.control}
          type={FormFieldType.INPUT}
          name="name"
          label="Name"
          placeholder="James Smith"
          iconSrc={Icons.USER_ICON.path}
          iconAlt={Icons.USER_ICON.alt}
        />
        <CustomFormField
          control={form.control}
          type={FormFieldType.INPUT}
          name="email"
          label="Email"
          placeholder="jamessmith@healthcare.com"
          iconSrc={Icons.EMAIL_ICON.path}
          iconAlt={Icons.EMAIL_ICON.alt}
        />
        <CustomFormField
          control={form.control}
          type={FormFieldType.PHONE_INPUT}
          name="phone"
          label="Phone number"
          placeholder="500 600 700"
        />
        <div className="mt-8">
          <SubmitButton isLoading={isSubmitting} className="w-full">
            Get started!
          </SubmitButton>
        </div>
      </form>
    </Form>
  )
}
