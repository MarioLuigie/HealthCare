'use client'
// modules
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
// lib
import {
	CreateAppointmentFormValues,
	getAppointmentFormDefaultValues,
	getAppointmentFormSchema,
} from '@/lib/types/zod'
import { FormFieldType } from '@/lib/types/enums'
import { createButtonLabel, generateUrl } from '@/lib/utils'
import {
	handleCreateAppointment,
	handleUpdateAppointment,
} from '@/lib/handlers/appointment.handlers'
import { doctors } from '@/lib/constants'
import { ActionTypes } from '@/lib/types/enums'
// components
import { Form } from '@/components/ui/form'
import SubmitButton from '@/components/shared/buttons/SubmitButton'
import CustomFormField from '@/components/shared/CustomFormField'
import { SelectItem } from '@/components/ui/select'
// Styles
import 'react-datepicker/dist/react-datepicker.css'
import { Route } from '@/lib/constants/paths'
import { Appointment } from '@/lib/types/appwrite.types'

type AppointmentFormProps = {
	userId: string | undefined
	actionType: ActionTypes
	appointment?: Appointment
	handleCloseDialog?: () => void
}

export default function AppointmentForm({
	userId,
	actionType,
	appointment,
	handleCloseDialog,
}: AppointmentFormProps) {
	const router = useRouter()
	const pathname = usePathname()
	const AppointmentFormSchema = getAppointmentFormSchema(actionType)

	const form = useForm<z.infer<typeof AppointmentFormSchema>>({
		resolver: zodResolver(AppointmentFormSchema),
		defaultValues: getAppointmentFormDefaultValues(actionType, appointment),
	})
	const { isSubmitting } = form.formState

	const onSubmit: SubmitHandler<
		z.infer<typeof AppointmentFormSchema>
	> = async (appointmentFormValues: z.infer<typeof AppointmentFormSchema>) => {
		try {
			if (actionType === ActionTypes.CREATE) {
				const { data: createdAppointment, success } =
					await handleCreateAppointment(
						appointmentFormValues as CreateAppointmentFormValues
					)

				if (!createdAppointment || !success) {
					throw new Error('An error occured while creating appointment.')
				}

				if (createdAppointment && userId) {
					if (pathname === Route.DASHBOARD) {
						router.push(generateUrl([Route.DASHBOARD]))
					} else {
						router.push(
							generateUrl(
								[
									Route.PATIENTS,
									userId,
									Route.CREATE_APPOINTMENT,
									Route.SUCCESS,
								],
								{ appointmentId: createdAppointment.$id }
							)
						)
					}
				}

				if (handleCloseDialog) {
					handleCloseDialog()
				}
				
			} else if (
				(actionType === ActionTypes.CANCEL ||
					actionType === ActionTypes.SCHEDULE) &&
				appointment
			) {
				const { data: updatedAppointment, success } =
					await handleUpdateAppointment(
						appointment.$id,
						appointmentFormValues,
						actionType,
						userId
					)

				if (!updatedAppointment || !success) {
					throw new Error('An error occured while updating appointment.')
				}

				if (handleCloseDialog) {
					handleCloseDialog()
				}
			}

			form.reset()
		} catch (err) {
			console.error('Error from onSubmit for PatientForm', err)
			throw new Error(
				'An error occurred while processing the appointment update.'
			)
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-6"
			>
				{/* CREATE APPOINTMENT */}
				{actionType !== ActionTypes.CANCEL && (
					<>
						{/* Select doctor */}
						<CustomFormField
							control={form.control}
							typeField={FormFieldType.SELECT}
							name="primaryPhysician"
							label="Doctor"
							placeholder="Select a doctor"
						>
							{doctors.map((doctor, i) => (
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
							typeField={FormFieldType.DATE_PICKER}
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
								typeField={FormFieldType.TEXTAREA}
								name="reason"
								label="Reason for appointment "
								placeholder="ex: Annual montly check-up"
							/>
							<CustomFormField
								control={form.control}
								typeField={FormFieldType.TEXTAREA}
								name="note"
								label="Additional comments/notes"
								placeholder="ex: Prefer afternoon appointments, if possible"
							/>
						</div>
					</>
				)}
				{/* CANCEL APPOINTMENT */}
				{actionType === ActionTypes.CANCEL && (
					<CustomFormField
						control={form.control}
						typeField={FormFieldType.TEXTAREA}
						name="cancellationReason"
						label="Reason for cancellation"
						placeholder="ex: Sudden unexpected situation"
					/>
				)}
				<div className="mt-8">
					<SubmitButton
						isDanger={actionType === ActionTypes.CANCEL}
						isLoading={isSubmitting}
						className="w-full"
						variant="fill"
					>
						{createButtonLabel(actionType, 'Appointment')}
					</SubmitButton>
				</div>
			</form>
		</Form>
	)
}
