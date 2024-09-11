'use client'

// modules
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import Image from 'next/image'
// lib
import { getAppointmentSchema } from '@/lib/types/zod'
import { FormFieldType } from '@/lib/types/enums'
import { createSubmitLabel } from '@/lib/utils'
import {
	Doctors,
	CreateAppointmentFormDefaultValues,
	CancelAppointmentFormDefaultValues,
	ScheduleAppointmentFormDefaultValues,
} from '@/lib/constants'
// components
import { Form } from '@/components/ui/form'
import SubmitButton from '@/components/shared/SubmitButton'
import CustomFormField from '@/components/shared/CustomFormField'
import { SelectItem } from '@/components/ui/select'
// Styles
import 'react-datepicker/dist/react-datepicker.css'

type AppointmentFormProps = {
	userId: string
	patientId: string
	type: 'create' | 'cancel' | 'schedule' // literal type
}

export default function AppointmentForm({
	userId,
	patientId,
	type,
}: AppointmentFormProps) {
	const AppointmentFormSchema = getAppointmentSchema(type)

	const form = useForm<z.infer<typeof AppointmentFormSchema>>({
		resolver: zodResolver(AppointmentFormSchema),
		defaultValues: {
			primaryPhysician: '',
			schedule: new Date(),
			reason: '',
			note: '',
			cancellationReason: '',
		},
	})

	const { isSubmitting } = form.formState

	const onSubmit: SubmitHandler<
		z.infer<typeof AppointmentFormSchema>
	> = async (formData: z.infer<typeof AppointmentFormSchema>) => {
		let status: Status = 'pending'

		switch (type) {
			case 'schedule':
				status = 'scheduled'
				break
			case 'cancel':
				status = 'cancelled'
				break
			default:
				status = 'pending'
		}

		try {
			if(type === 'create' && patientId) {
				const appointmentData = {
					userId,
					patientId,
					primaryPhysician: formData.primaryPhysician,
					schedule: new Date(formData.schedule),
					reason: formData.reason,
					note: formData.note,
					status: status as Status
				}
			}

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
								name="note"
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
						{createSubmitLabel(type, 'Appointment')}
					</SubmitButton>
				</div>
			</form>
		</Form>
	)
}
