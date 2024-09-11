import { z } from 'zod'

// UserForm validation
export const UserFormSchema = z.object({
	name: z
		.string()
		.min(2, 'Name must be at least 2 characters')
		.max(50, 'Name must be at most 50 characters'),
	email: z.string().email('Invalid email address'),
	phone: z
		.string()
		.refine((phone) => /^\+\d{10,15}$/.test(phone), 'Invalid phone number'),
})

export type UserFormData = z.infer<typeof UserFormSchema>

// PatientForm validation
export const PatientFormSchema = z.object({
	name: z
		.string()
		.min(2, 'Name must be at least 2 characters')
		.max(50, 'Name must be at most 50 characters')
		.default(''),
	email: z.string().email('Invalid email address').default(''),
	phone: z
		.string()
		.refine((phone) => /^\+\d{10,15}$/.test(phone), 'Invalid phone number')
		.default(''),

	birthDate: z.coerce.date().default(new Date('01-01-1900')),
	gender: z.enum(['Male', 'Female', 'Other']).default('Male' as Gender),
	address: z
		.string()
		.min(5, 'Address must be at least 5 characters')
		.max(500, 'Address must be at most 500 characters')
		.default(''),
	occupation: z
		.string()
		.min(2, 'Occupation must be at least 2 characters')
		.max(500, 'Occupation must be at most 500 characters')
		.default(''),
	emergencyContactName: z
		.string()
		.min(2, 'Contact name must be at least 2 characters')
		.max(50, 'Contact name must be at most 50 characters')
		.default(''),
	emergencyContactNumber: z
		.string()
		.refine(
			(emergencyContactNumber) =>
				/^\+\d{10,15}$/.test(emergencyContactNumber),
			'Invalid phone number'
		)
		.default(''),
	primaryPhysician: z
		.string()
		.min(2, 'Select at least one doctor')
		.default(''),
	insuranceProvider: z
		.string()
		.min(2, 'Insurance name must be at least 2 characters')
		.max(50, 'Insurance name must be at most 50 characters')
		.default(''),
	insurancePolicyNumber: z
		.string()
		.min(2, 'Policy number must be at least 2 characters')
		.max(50, 'Policy number must be at most 50 characters')
		.default(''),
	allergies: z.string().optional().default(''),
	currentMedication: z.string().optional().default(''),
	familyMedicalHistory: z.string().optional().default(''),
	pastMedicalHistory: z.string().optional().default(''),
	identificationType: z.string().optional().default(''),
	identificationNumber: z.string().optional().default(''),
	identificationDocuments: z.custom<File[]>().optional().default([]),
	treatmentConsent: z
		.boolean()
		.refine((value) => value === true, {
			message: 'You must consent to treatment in order to proceed',
		})
		.default(false),
	disclosureConsent: z
		.boolean()
		.refine((value) => value === true, {
			message: 'You must consent to disclosure in order to proceed',
		})
		.default(false),
	privacyConsent: z
		.boolean()
		.refine((value) => value === true, {
			message: 'You must consent to privacy in order to proceed',
		})
		.default(false),
})

export type PatientFormData = z.infer<typeof PatientFormSchema>

// AppointmentForm validation
export const CreateAppointmentSchema = z.object({
	primaryPhysician: z.string().min(2, 'Select at least one doctor'),
	schedule: z.coerce.date(),
	reason: z
		.string()
		.min(2, 'Reason must be at least 2 characters')
		.max(500, 'Reason must be at most 500 characters'),
	note: z.string().optional(),
	cancellationReason: z.string().optional(),
})

export const ScheduleAppointmentSchema = z.object({
	primaryPhysician: z.string().min(2, 'Select at least one doctor'),
	schedule: z.coerce.date(),
	reason: z.string().optional(),
	note: z.string().optional(),
	cancellationReason: z.string().optional(),
})

export const CancelAppointmentSchema = z.object({
	primaryPhysician: z.string().min(2, 'Select at least one doctor'),
	schedule: z.coerce.date(),
	reason: z.string().optional(),
	note: z.string().optional(),
	cancellationReason: z
		.string()
		.min(2, 'Reason must be at least 2 characters')
		.max(500, 'Reason must be at most 500 characters'),
})

export function getAppointmentSchema(type: string) {
	switch (type) {
		case 'create':
			return CreateAppointmentSchema
		case 'cancel':
			return CancelAppointmentSchema
		default:
			return ScheduleAppointmentSchema
	}
}
