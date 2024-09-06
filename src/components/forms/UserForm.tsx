'use client'

// modules
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'
// lib
import { UserFormSchema, UserFormData } from '@/lib/types/zod'
import { FormFieldType } from '@/lib/types/enums'
import { icons } from '@/lib/constants'
import { handleCreateUser } from '@/lib/handlers/user.handlers'
// components
import SubmitButton from '@/components/shared/SubmitButton'
import CustomFormField from '@/components/shared/CustomFormField'
import { Form } from '@/components/ui/form'

export default function UserForm() {
	const router = useRouter()

	const form = useForm<UserFormData>({
		resolver: zodResolver(UserFormSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
		},
	})

	const { isSubmitting } = form.formState

	const onSubmit: SubmitHandler<UserFormData> = async (formData: UserFormData) => {
		try {
			const user = await handleCreateUser(formData)

			if (user!) {
				router.push(`/patients/${user.$id}/register`)
				form.reset()
			} else {
				console.log('Something went wrong with creating user.')
			}
		} catch (err) {
			console.error('Error from onSubmit for PatientForm', err)
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-8"
			>
				<div className="mb-12 space-y-4">
					<h1 className="header">Hi there !</h1>
					<p className="text-dark-700">Get started with appointments.</p>
				</div>
				<CustomFormField
					control={form.control}
					type={FormFieldType.INPUT}
					name="name"
					label="Name"
					placeholder="James Smith"
					iconSrc={icons.USER_ICON.path}
					iconAlt={icons.USER_ICON.alt}
				/>
				<CustomFormField
					control={form.control}
					type={FormFieldType.INPUT}
					name="email"
					label="Email"
					placeholder="jamessmith@healthcare.com"
					iconSrc={icons.EMAIL_ICON.path}
					iconAlt={icons.EMAIL_ICON.alt}
				/>
				<CustomFormField
					control={form.control}
					type={FormFieldType.PHONE_INPUT}
					name="phone"
					label="Phone number"
					placeholder="500 600 700"
				/>
				<div className="mt-8">
					<SubmitButton isLoading={isSubmitting}>
						Get started!
					</SubmitButton>
				</div>
			</form>
		</Form>
	)
}
