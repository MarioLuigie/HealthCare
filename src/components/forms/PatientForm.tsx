'use client'

// modules
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
// lib
import { UserFormSchema, UserFormData } from '@/lib/types/zod'
import { FormFieldType } from '@/lib/types/enums'
import { icons } from '@/lib/constants'
import { handleCreateUser } from '@/lib/handlers/user.handlers'
import { GenderOptions, Doctors } from '@/lib/constants'
// components
import { Form, FormControl } from '@/components/ui/form'
import SubmitButton from '@/components/shared/SubmitButton'
import CustomFormField from '@/components/shared/CustomFormField'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import {
	SelectItem,
} from '@/components/ui/select'
// Styles
import 'react-datepicker/dist/react-datepicker.css'

export default function PatientForm({ user }: { user: User }) {
	const router = useRouter()

	const form = useForm<UserFormData>({
		resolver: zodResolver(UserFormSchema),
		defaultValues: {
			name: '',
			email: user.email,
			phone: user.phone,
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
				{/* PERSONAL INFORMATION */}
				<section className="space-y-6">
					<div className="space-y-1">
						<h2 className="sub-header">Personal information</h2>
					</div>
				</section>
				{/* Name */}
				<CustomFormField
					control={form.control}
					type={FormFieldType.INPUT}
					name="name"
					label="Full name"
					placeholder="ex. James Smith"
					iconSrc={icons.USER_ICON.path}
					iconAlt={icons.USER_ICON.alt}
				/>
				{/* Email Phone */}
				<div className="flex flex-col xl:flex-row gap-4">
					<CustomFormField
						control={form.control}
						type={FormFieldType.INPUT}
						name="email"
						label="Email address"
						iconSrc={icons.EMAIL_ICON.path}
						iconAlt={icons.EMAIL_ICON.alt}
					/>
					<CustomFormField
						control={form.control}
						type={FormFieldType.INPUT}
						name="phone"
						label="Phone number"
						iconSrc={icons.PHONE_ICON.path}
						iconAlt={icons.PHONE_ICON.alt}
					/>
				</div>
				{/* Date of birth and Gender */}
				<div className="flex flex-col xl:flex-row gap-4">
					<CustomFormField
						control={form.control}
						type={FormFieldType.DATE_PICKER}
						name="birthDate"
						label="Date of birth"
						placeholder="Select your birth"
					/>
					<CustomFormField
						control={form.control}
						type={FormFieldType.SKELETON}
						name="gender"
						label="Gender"
						renderSkeleton={(field) => (
							<FormControl>
								<RadioGroup
									className="flex gap-3 h-11 xl:justify-between"
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									{GenderOptions.map((option, i) => (
										<div key={option + i} className="radio-group">
											<RadioGroupItem value={option} id={option} />
											<Label
												htmlFor={option}
												className="cursor-pointer"
											>
												{option}
											</Label>
										</div>
									))}
								</RadioGroup>
							</FormControl>
						)}
					/>
				</div>
				{/* Address and Occupation */}
				<div className="flex flex-col xl:flex-row gap-4">
					<CustomFormField
						control={form.control}
						type={FormFieldType.INPUT}
						name="address"
						label="Address"
						placeholder="ex. 12th Street, New York"
					/>
					<CustomFormField
						control={form.control}
						type={FormFieldType.INPUT}
						name="occupation"
						label="Occupation"
						placeholder="ex. Architect"
					/>
				</div>
				{/* Emergency Contact Name and Phone */}
				<div className="flex flex-col xl:flex-row gap-4">
					<CustomFormField
						control={form.control}
						type={FormFieldType.INPUT}
						name="emergencyContactName"
						label="Emergency contact name"
						placeholder="Guardian's name"
					/>
					<CustomFormField
						control={form.control}
						type={FormFieldType.PHONE_INPUT}
						name="emergencyContactNumber"
						label="Emergency contact number"
					/>
				</div>
				{/* MEDICAL INFORMATION */}
				<section className="space-y-6 pt-4">
					<div className="space-y-1">
						<h2 className="sub-header">Medical information</h2>
					</div>
				</section>
				{/* Primary care physician */}
				<CustomFormField
					control={form.control}
					type={FormFieldType.SELECT}
					name="primaryPhysician"
					label="Primary physician"
					placeholder="Select a physician"
				>
					{Doctors.map((doctor, i) => (
						<SelectItem
							key={doctor.name + i}
							value={doctor.name}
							className="cursor-pointer"
						>
							<div className="flex justify-start items-center gap-4">
								<Image
									src={doctor.image}
									width={32}
									height={32}
									alt="doctor full name"
								/>
								<p>{doctor.name}</p>
							</div>
						</SelectItem>
					))}
				</CustomFormField>

				<div className="flex flex-col xl:flex-row gap-4"></div>

				<div className="mt-8">
					<SubmitButton isLoading={isSubmitting}>Register</SubmitButton>
				</div>
			</form>
		</Form>
	)
}
