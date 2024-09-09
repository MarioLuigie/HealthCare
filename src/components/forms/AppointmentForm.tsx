'use client'

// modules
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
// lib
import { PatientFormSchema, PatientFormData } from '@/lib/types/zod'
import { FormFieldType } from '@/lib/types/enums'
import { prepareFileUploadData } from '@/lib/utils'
import { handleRegisterPatient } from '@/lib/handlers/patient.handlers'
import { icons } from '@/lib/constants'
import {
	GenderOptions,
	Doctors,
	IdentificationTypes,
	PatientFormDefaultValues,
} from '@/lib/constants'
// components
import { Form, FormControl } from '@/components/ui/form'
import SubmitButton from '@/components/shared/SubmitButton'
import CustomFormField from '@/components/shared/CustomFormField'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { SelectItem } from '@/components/ui/select'
// Styles
import 'react-datepicker/dist/react-datepicker.css'

type AppointmentFormProps = {
	userId: string
	patientId: string
	type: 'create' | 'cancel' // literal type
}

export default function AppointmentForm({
	userId,
	patientId,
	type,
}: AppointmentFormProps) {
	const router = useRouter()

	const form = useForm<PatientFormData>({
		resolver: zodResolver(PatientFormSchema),
		defaultValues: {},
	})

	const { isSubmitting } = form.formState

	const onSubmit: SubmitHandler<PatientFormData> = async (
		formData: PatientFormData
	) => {
		try {
			form.reset()
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
				{/* CREATE APPOINTMENT */}
				{type !== 'cancel' && (
					<>
						{/* Select doctor */}
						<CustomFormField
							control={form.control}
							type={FormFieldType.SELECT}
							name="primaryPhysician"
							label="Doctor"
							placeholder="Select a doctor"
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
											alt={doctor.name}
										/>
										<p>{doctor.name}</p>
									</div>
								</SelectItem>
							))}
						</CustomFormField>

						{/* Select date and time of appointment */}
						<CustomFormField
							control={form.control}
							type={FormFieldType.DATE_PICKER}
							name="schedule"
							placeholder="Select date of appointment"
							label="Expected appointment date and time"
							showTimeSelect
							dateFormat="MM/dd/yyyy - h: mm aa"
						/>

						{/* Reason and note for appointment */}
						<div className="flex flex-col xl:flex-row gap-4">
							<CustomFormField
								control={form.control}
								type={FormFieldType.TEXTAREA}
								name="reason"
								label="Reason for appointment "
								placeholder="ex: Annual montly check-up"
							/>
							<CustomFormField
								control={form.control}
								type={FormFieldType.TEXTAREA}
								name="notes"
								label="Additional comments/notes"
								placeholder="ex: Prefer afternoon appointments, if possible"
							/>
						</div>
					</>
				)}
				{/* CANCEL APPOINTMENT */}
				{type === 'cancel' && (
					<CustomFormField
						control={form.control}
						type={FormFieldType.TEXTAREA}
						name="cancellationReason"
						label="Reason for cancellation"
						placeholder="ex: Sudden unexpected situation"
					/>
				)}

				<div className="mt-8">
					<SubmitButton
						isDanger={type === 'cancel'}
						isLoading={isSubmitting}
						className="w-full"
					>
						Submit and Continue
					</SubmitButton>
				</div>
			</form>
		</Form>
	)
}
