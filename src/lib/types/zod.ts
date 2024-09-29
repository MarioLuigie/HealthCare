import { z } from "zod"
import { ActionTypes, AuthTypes } from "@/lib/types/enums"
import { Appointment } from "@/lib/types/appwrite.types"

// AuthForm
export const SignUpAuthFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
})

export type SignUpAuthFormValues = z.infer<typeof SignUpAuthFormSchema>

export const SignInAuthFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(64, "Password must be at most 64 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/\d/, "Password must contain at least one number")
    .regex(/[@$!%*?&#]/, "Password must contain at least one special character")
    .refine((val) => !val.toLowerCase().includes("password"), {
      message: "Password cannot contain the word 'password'",
    }),
})

export type SignInAuthFormValues = z.infer<typeof SignInAuthFormSchema>

export function getAuthFormSchema(authType: AuthTypes) {
  switch (authType) {
    case AuthTypes.SIGN_UP:
      return SignUpAuthFormSchema
    case AuthTypes.SIGN_IN:
      return SignInAuthFormSchema
  }
}

// PatientForm
export const PatientFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),

  birthDate: z.coerce.date(),
  gender: z.enum(["Male", "Female", "Other"]),
  address: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .max(500, "Address must be at most 500 characters"),
  occupation: z
    .string()
    .min(2, "Occupation must be at least 2 characters")
    .max(500, "Occupation must be at most 500 characters"),
  emergencyContactName: z
    .string()
    .min(2, "Contact name must be at least 2 characters")
    .max(50, "Contact name must be at most 50 characters"),
  emergencyContactNumber: z
    .string()
    .refine(
      (emergencyContactNumber) => /^\+\d{10,15}$/.test(emergencyContactNumber),
      "Invalid phone number"
    ),
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  insuranceProvider: z
    .string()
    .min(2, "Insurance name must be at least 2 characters")
    .max(50, "Insurance name must be at most 50 characters"),
  insurancePolicyNumber: z
    .string()
    .min(2, "Policy number must be at least 2 characters")
    .max(50, "Policy number must be at most 50 characters"),
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
      message: "You must consent to treatment in order to proceed",
    }),
  disclosureConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must consent to disclosure in order to proceed",
    }),
  privacyConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must consent to privacy in order to proceed",
    }),
})

export type PatientFormValues = z.infer<typeof PatientFormSchema>

// AppointmentForm
export const CreateAppointmentFormSchema = z.object({
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  schedule: z.coerce.date(),
  reason: z
    .string()
    .min(2, "Reason must be at least 2 characters")
    .max(500, "Reason must be at most 500 characters"),
  note: z.string().optional(),
  // cancellationReason: z.string().optional(),
})

export type CreateAppointmentFormValues = z.infer<
  typeof CreateAppointmentFormSchema
>

export const ScheduleAppointmentFormSchema = z.object({
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  // cancellationReason: z.string().optional(),
})

export type ScheduleAppointmentFormValues = z.infer<
  typeof ScheduleAppointmentFormSchema
>

export const CancelAppointmentFormSchema = z.object({
  // primaryPhysician: z.string().min(2, "Select at least one doctor"),
  // schedule: z.coerce.date(),
  // reason: z.string().optional(),
  // note: z.string().optional(),
  cancellationReason: z
    .string()
    .min(2, "Reason must be at least 2 characters")
    .max(500, "Reason must be at most 500 characters"),
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

// AppointmentForm default values
export function getAppointmentFormDefaultValues(
  actionType: ActionTypes,
  appointment?: Appointment
) {
  switch (actionType) {
    case ActionTypes.CREATE:
      return {
        primaryPhysician: "",
        schedule: new Date(Date.now()),
        reason: "",
        note: "",
      }
    case ActionTypes.CANCEL:
      return {
        cancellationReason: "", // !!DO IT!! - Check value empty string or null || ""
      }
    case ActionTypes.SCHEDULE:
      return {
        primaryPhysician: appointment ? appointment.primaryPhysician : "",
        schedule: appointment
          ? new Date(appointment.schedule)
          : new Date(Date.now()),
        reason: appointment ? appointment.reason : "",
        note: appointment ? appointment.note : "",
      }
  }
}

//	identificationDocuments: z.custom<File[]>().optional().default([]),
