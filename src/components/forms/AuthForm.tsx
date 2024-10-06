"use client"
// modules
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
// lib
import {
  getAuthFormDefaultValues,
  getAuthFormSchema,
  SignUpAuthFormValues,
  SignInAuthFormValues,
} from "@/lib/types/zod"
import { AuthTypes, FormFieldType } from "@/lib/types/enums"
import { Icons } from "@/lib/constants"
import { handleSignUp, handleSignIn } from "@/lib/handlers/auth.handlers"
import { generateUrl } from "@/lib/utils"
import { Route } from "@/lib/constants/paths"
// components
import SubmitButton from "@/components/shared/buttons/SubmitButton"
import CustomFormField from "@/components/shared/CustomFormField"
import { Form } from "@/components/ui/form"

type AuthFormProps = {
  authType: AuthTypes
}

export default function AuthForm({ authType }: AuthFormProps) {
  const router = useRouter()
  const [error, setError] = useState<string | undefined>("")

  const AuthFormSchema = getAuthFormSchema(authType)

  const form = useForm<z.infer<typeof AuthFormSchema>>({
    resolver: zodResolver(AuthFormSchema),
    defaultValues: getAuthFormDefaultValues(authType),
  })

  const { watch, formState } = form
  const { isSubmitting } = formState

  const email = watch("email")
  const password = watch("password")

  useEffect(() => {
    if (email) {
      setError("")
    } else if (password) {
      setError("")
    }
  }, [email, password])

  const onSubmit: SubmitHandler<z.infer<typeof AuthFormSchema>> = async (
    authFormValues: z.infer<typeof AuthFormSchema>
  ) => {
    try {
      if (authType === AuthTypes.SIGN_UP) {
        const result = await handleSignUp(
          authFormValues as SignUpAuthFormValues
        )

        if (result && result.success) {
          router.push(generateUrl([Route.USER_VERIFY]))
          setError("")
          form.reset()
        }

        if (result && !result.success) {
          setError(result.message)
        }
      } else if (authType === AuthTypes.SIGN_IN) {
        const result = await handleSignIn(
          authFormValues as SignInAuthFormValues
        )

        if (result && result.success && result.data) {
          router.push(
            generateUrl([Route.DASHBOARD_PATIENT, result.data.userId])
          )
          setError("")
        } else if (result && !result.success) {
          setError(result.message)
          console.log("hello", error)
        }
      }
    } catch (err) {
      console.error("Error from onSubmit for AuthForm", err)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        {/* Sign Up Form */}
        {authType === AuthTypes.SIGN_UP && (
          <>
            <CustomFormField
              control={form.control}
              typeField={FormFieldType.INPUT}
              name="name"
              label="Name*"
              placeholder="James Smith"
              iconSrc={Icons.USER_ICON.path}
              iconAlt={Icons.USER_ICON.alt}
            />
            <CustomFormField
              control={form.control}
              typeField={FormFieldType.INPUT}
              name="email"
              label="Email*"
              placeholder="jamessmith@healthcare.com"
              autoFocus
              iconSrc={Icons.EMAIL_ICON.path}
              iconAlt={Icons.EMAIL_ICON.alt}
            />
            <CustomFormField
              control={form.control}
              typeField={FormFieldType.INPUT}
              name="password"
              label="Password*"
              placeholder="Password"
              type="password"
              iconSrc={Icons.PASSWORD_ICON.path}
              iconAlt={Icons.PASSWORD_ICON.alt}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </>
        )}

        {/* Sign In Form */}
        {authType === AuthTypes.SIGN_IN && (
          <>
            <CustomFormField
              control={form.control}
              typeField={FormFieldType.INPUT}
              name="email"
              label="Email*"
              placeholder="jamessmith@healthcare.com"
              autoFocus
              iconSrc={Icons.EMAIL_ICON.path}
              iconAlt={Icons.EMAIL_ICON.alt}
            />
            <CustomFormField
              control={form.control}
              typeField={FormFieldType.INPUT}
              name="password"
              label="Password*"
              placeholder="Password"
              type="password"
              iconSrc={Icons.PASSWORD_ICON.path}
              iconAlt={Icons.PASSWORD_ICON.alt}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </>
        )}

        <div className="mt-8">
          <SubmitButton isLoading={isSubmitting} className="w-full">
            {authType === AuthTypes.SIGN_UP && "Get started!"}
            {authType === AuthTypes.SIGN_IN && "Sign In"}
          </SubmitButton>
        </div>
      </form>
    </Form>
  )
}
