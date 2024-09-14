import { z } from 'zod'
import { ActionTypes } from '@/lib/types/enums'
import {
	CreateAppointmentFormDefaultValues,
	CancelAppointmentFormDefaultValues,
	ScheduleAppointmentFormDefaultValues,
} from '@/lib/constants'

// UserForm
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

export type UserFormValues = z.infer<typeof UserFormSchema>

// PatientForm
export const PatientFormSchema = z.object({
	name: z
		.string()
		.min(2, 'Name must be at least 2 characters')
		.max(50, 'Name must be at most 50 characters'),
	email: z.string().email('Invalid email address'),
	phone: z
		.string()
		.refine((phone) => /^\+\d{10,15}$/.test(phone), 'Invalid phone number'),

	birthDate: z.coerce.date(),
	gender: z.enum(['Male', 'Female', 'Other']),
	address: z
		.string()
		.min(5, 'Address must be at least 5 characters')
		.max(500, 'Address must be at most 500 characters'),
	occupation: z
		.string()
		.min(2, 'Occupation must be at least 2 characters')
		.max(500, 'Occupation must be at most 500 characters'),
	emergencyContactName: z
		.string()
		.min(2, 'Contact name must be at least 2 characters')
		.max(50, 'Contact name must be at most 50 characters'),
	emergencyContactNumber: z
		.string()
		.refine(
			(emergencyContactNumber) =>
				/^\+\d{10,15}$/.test(emergencyContactNumber),
			'Invalid phone number'
		),
	primaryPhysician: z.string().min(2, 'Select at least one doctor'),
	insuranceProvider: z
		.string()
		.min(2, 'Insurance name must be at least 2 characters')
		.max(50, 'Insurance name must be at most 50 characters'),
	insurancePolicyNumber: z
		.string()
		.min(2, 'Policy number must be at least 2 characters')
		.max(50, 'Policy number must be at most 50 characters'),
	allergies: z.string().optional(),
	currentMedication: z.string().optional(),
	familyMedicalHistory: z.string().optional(),
	pastMedicalHistory: z.string().optional(),
	identificationType: z.string().optional(),
	identificationNumber: z.string().optional(),
	identificationDocuments: z.array(z.instanceof(File)).optional().default([]),
	treatmentConsent: z
		.boolean()
		.default(false)
		.refine((value) => value === true, {
			message: 'You must consent to treatment in order to proceed',
		}),
	disclosureConsent: z
		.boolean()
		.default(false)
		.refine((value) => value === true, {
			message: 'You must consent to disclosure in order to proceed',
		}),
	privacyConsent: z
		.boolean()
		.default(false)
		.refine((value) => value === true, {
			message: 'You must consent to privacy in order to proceed',
		}),
})

export type PatientFormValues = z.infer<typeof PatientFormSchema>

// AppointmentForm
export const CreateAppointmentFormSchema = z.object({
	primaryPhysician: z.string().min(2, 'Select at least one doctor'),
	schedule: z.coerce.date(),
	reason: z
		.string()
		.min(2, 'Reason must be at least 2 characters')
		.max(500, 'Reason must be at most 500 characters'),
	note: z.string().optional(),
	cancellationReason: z.string().optional(),
})

export type CreateAppointmentFormValues = z.infer<
	typeof CreateAppointmentFormSchema
>

export const ScheduleAppointmentFormSchema = z.object({
	primaryPhysician: z.string().min(2, 'Select at least one doctor'),
	schedule: z.coerce.date(),
	reason: z.string().optional(),
	note: z.string().optional(),
	cancellationReason: z.string().optional(),
})

export type ScheduleAppointmentFormValues = z.infer<
	typeof ScheduleAppointmentFormSchema
>

export const CancelAppointmentFormSchema = z.object({
	primaryPhysician: z.string().min(2, 'Select at least one doctor'),
	schedule: z.coerce.date(),
	reason: z.string().optional(),
	note: z.string().optional(),
	cancellationReason: z
		.string()
		.min(2, 'Reason must be at least 2 characters')
		.max(500, 'Reason must be at most 500 characters'),
})

export type CancelAppointmentFormValues = z.infer<
	typeof CancelAppointmentFormSchema
>

export function getAppointmentFormSchema(actionType: ActionTypes) {
	switch (actionType) {
		case ActionTypes.CREATE:
			return CreateAppointmentFormSchema
		case ActionTypes.CANCEL:
			return CancelAppointmentFormSchema
		case ActionTypes.SCHEDULE:
			return ScheduleAppointmentFormSchema
	}
}

export function getAppointmentFormDefaultValues(actionType: ActionTypes) {
	switch(actionType) {
		case ActionTypes.CREATE:
			return CreateAppointmentFormDefaultValues
		case ActionTypes.CANCEL:
			return CancelAppointmentFormDefaultValues
		case ActionTypes.SCHEDULE:
			return ScheduleAppointmentFormDefaultValues
	}
}

//	identificationDocuments: z.custom<File[]>().optional().default([]),
