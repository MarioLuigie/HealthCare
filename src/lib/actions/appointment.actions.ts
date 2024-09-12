'use server'

import { Status } from '@/lib/types/enums'

// Create Appoitment
export async function createAppointment(
	appointment: any,
	patientId: string,
	userId: string
) {
	try {
		const appointmentData = {
			userId,
			patientId,
			primaryPhysician: appointment.primaryPhysician,
			schedule: new Date(appointment.schedule),
			reason: appointment.reason,
			note: appointment.note,
			status: Status.PENDING,
		}
	} catch (err) {
		console.error(err)
	}
}

// Cancel Appointment
export async function cancelAppointment() {
  const status: Status = Status.CANCELLED

	try {
	} catch (err) {
		console.error(err)
	}
}

// Schedule Appointment
export async function scheduleAppointment() {
  const status: Status = Status.SCHEDULED

	try {
	} catch (err) {
		console.error(err)
	}
}
