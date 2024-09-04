'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { PatientformSchema, PatientFormData } from '@/lib/types/zod'

export default function PatientForm() {
	const form = useForm<PatientFormData>({
		resolver: zodResolver(PatientformSchema),
		defaultValues: {
			username: '',
		},
	})

  const onSubmit: SubmitHandler<PatientFormData> = (data: PatientFormData) => {

  }

	return <div>Patient Form</div>
}
