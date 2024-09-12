'use server'

import { Status } from '@/lib/types/enums'
import {
	CreateAppointmentFormData,
	CancelAppointmentFormData,
	ScheduleAppointmentFormData,
} from '@/lib/types/zod'

// Create Appoitment
export async function createAppointment(
	formData: CreateAppointmentFormData,
	patientId: string,
	userId: string
) {
	try {
		const appointmentData: CreateAppointmentParams = {
			userId,
			patientId,
			primaryPhysician: formData.primaryPhysician,
			schedule: new Date(formData.schedule),
			reason: formData.reason,
			note: formData.note,
			status: Status.PENDING,
		} 

	} catch (err) {
		console.error(err)
	}
}

// Cancel Appointment
export async function cancelAppointment(formData: CancelAppointmentFormData) {
  const status: Status = Status.CANCELLED

	try {
	} catch (err) {
		console.error(err)
	}
}

// Schedule Appointment
export async function scheduleAppointment(formData: ScheduleAppointmentFormData) {
  const status: Status = Status.SCHEDULED

	try {
	} catch (err) {
		console.error(err)
	}
}
