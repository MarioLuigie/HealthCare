'use client'

// modules
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
// lib
import { PatientformSchema, PatientFormData } from '@/lib/types/zod'
import { FormFieldType } from '@/lib/types/enums'
import { icons } from '@/lib/constants'
// components
import SubmitButton from '@/components/shared/SubmitButton'
import CustomFormField from '@/components/shared/CustomFormField'
import { Form } from '@/components/ui/form'

export default function PatientForm() {
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const form = useForm<PatientFormData>({
		resolver: zodResolver(PatientformSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
		},
	})

	const onSubmit: SubmitHandler<PatientFormData> = async (
		data: PatientFormData
	) => {
		try {
			
		} catch (err) {
			console.error("Error from onSubmit for PatientForm", err)
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
					placeholder="John Smith"
					iconSrc={icons.USER_ICON.path}
					iconAlt={icons.USER_ICON.alt}
				/>
				<CustomFormField
					control={form.control}
					type={FormFieldType.INPUT}
					name="email"
					label="Email"
					placeholder="johnsmith@example.com"
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
					<SubmitButton isLoading={isLoading}>Get started!</SubmitButton>
				</div>
			</form>
		</Form>
	)
}
