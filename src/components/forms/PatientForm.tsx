'use client'

// modules
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
// lib
import { PatientformSchema, PatientFormData } from '@/lib/types/zod'
import { FormFieldType } from '@/lib/types/enums'
import { icons } from '@/lib/constants'
// components
import { Button } from '@/components/ui/button'
import CustomFormField from '@/components/shared/CustomFormField'
import { Form } from '@/components/ui/form'

export default function PatientForm() {
	const form = useForm<PatientFormData>({
		resolver: zodResolver(PatientformSchema),
		defaultValues: {
			name: '',
			email: '',
		},
	})

	const onSubmit: SubmitHandler<PatientFormData> = (
		data: PatientFormData
	) => {}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-6 flex-1"
			>
				<section className="mb-12 space-y-4">
					<h1 className="header">Hi there !</h1>
					<p className="text-dark-700">Get started with appointments.</p>
				</section>
				<CustomFormField
					control={form.control}
					type={FormFieldType.INPUT}
					name="name"
					label="Name"
					placeholder="Enter your user name here"
					description="This is your public display name."
					iconSrc={icons.USER_ICON.path}
					iconAlt={icons.USER_ICON.alt}
				/>
				<CustomFormField
					control={form.control}
					type={FormFieldType.INPUT}
					name="email"
					label="Email"
					placeholder="Enter your email here"
					iconSrc={icons.EMAIL_ICON.path}
					iconAlt={icons.EMAIL_ICON.alt}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	)
}
