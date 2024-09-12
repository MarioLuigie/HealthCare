import { createAppointment } from '@/lib/actions/appointment.actions'

// Create Appointment
export async function handleCreateAppointment(
	appointment: any,
	patientId: string,
	userId: string
) {
	const createdAppointment = await createAppointment(
		appointment,
		patientId,
		userId
	)
}

// Cancel Appointment
export async function handleCancelAppointment(patient: any) {}

// Schedule Appointment
export async function handleScheduleAppointment(patient: any) {}
