'use server'

import { Status } from '@/lib/types/enums'
import {
	CreateAppointmentFormValues,
	CancelAppointmentFormValues,
	ScheduleAppointmentFormValues,
} from '@/lib/types/zod'

// Create Appoitment
export async function createAppointment(
	appointmentFormValues: CreateAppointmentFormValues,
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
export async function cancelAppointment(appointmentFormValues: CancelAppointmentFormValues) {
  const status: Status = Status.CANCELLED

	try {
	} catch (err) {
		console.error(err)
	}
}

// Schedule Appointment
export async function scheduleAppointment(appointmentFormValues: ScheduleAppointmentFormValues) {
  const status: Status = Status.SCHEDULED

	try {
	} catch (err) {
		console.error(err)
	}
}
