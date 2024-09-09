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

export default function AppointmentForm({ userId, patientId, type }: AppointmentFormProps) {
	const router = useRouter()

	const form = useForm<PatientFormData>({
		resolver: zodResolver(PatientFormSchema),
		defaultValues: {

		},
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



				<div className="mt-8">
					<SubmitButton isLoading={isSubmitting}>
						Submit and Continue
					</SubmitButton>
				</div>
			</form>
		</Form>
	)
}
