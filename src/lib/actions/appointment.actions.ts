'use server'

import { Status } from '@/lib/types/enums'
import {
	CreateAppointmentFormData,
	CancelAppointmentFormData,
	ScheduleAppointmentFormData,
} from '@/lib/types/zod'

// Create Appoitment
export async function createAppointment(
	appointmentFormValues: CreateAppointmentFormData,
	patientId: string,
	userId: string
) {
	try {
		const appointmentData: CreateAppointmentParams = {
			userId,
			patientId,
			primaryPhysician: appointmentFormValues.primaryPhysician,
			schedule: new Date(appointmentFormValues.schedule),
			reason: appointmentFormValues.reason,
			note: appointmentFormValues.note,
			status: Status.PENDING,
		} 

	} catch (err) {
		console.error(err)
	}
}

// Cancel Appointment
export async function cancelAppointment(appointmentFormValues: CancelAppointmentFormData) {
  const status: Status = Status.CANCELLED

	try {
	} catch (err) {
		console.error(err)
	}
}

// Schedule Appointment
export async function scheduleAppointment(appointmentFormValues: ScheduleAppointmentFormData) {
  const status: Status = Status.SCHEDULED

	try {
	} catch (err) {
		console.error(err)
	}
}
