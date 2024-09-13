'use client'

// modules
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'
// lib
import { UserFormSchema, UserFormData } from '@/lib/types/zod'
import { FormFieldType } from '@/lib/types/enums'
import { Icons } from '@/lib/constants'
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

	const onSubmit: SubmitHandler<UserFormData> = async (
		userFormValues: UserFormData
	) => {
		try {
			const user = await handleCreateUser(userFormValues)

			if (user!) {
				router.push(`/patients/${user.$id}/register`)
				form.reset()
			} else {
				console.log('Something went wrong with creating user.')
			}
		} catch (err) {
			console.error('Error from onSubmit for UserForm', err)
		}
	}

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
					<SubmitButton isLoading={isSubmitting} className='w-full'>
						Get started!
					</SubmitButton>
				</div>
			</form>
		</Form>
	)
}
