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

export default function PatientForm({ user }: { user: User }) {
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
		formData: UserFormData
	) => {
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

	console.log('Log from PatientForm')

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-6"
			>
				<section className="mb-8 space-y-4">
					<h1 className="header">Welcome !</h1>
					<p className="text-dark-700">Let us know more about yourself.</p>
				</section>

				<section className="space-y-6">
					<div className="space-y-1">
						<h2 className="sub-header">Personal information</h2>
					</div>
				</section>

				<CustomFormField
					control={form.control}
					type={FormFieldType.INPUT}
					name="name"
					label="Full name"
					placeholder="ex. James Smith"
				/>

				<div className="flex gap-3">
					<CustomFormField
						control={form.control}
						type={FormFieldType.INPUT}
						name="email"
						label="Email address"
					/>
					<CustomFormField
						control={form.control}
						type={FormFieldType.INPUT}
						name="phone"
						label="Phone number"
					/>
				</div>
				<div className="mt-8">
					<SubmitButton isLoading={isSubmitting}>Register</SubmitButton>
				</div>
			</form>
		</Form>
	)
}
