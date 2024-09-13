// lib
import {
	createAppointment,
	cancelAppointment,
	scheduleAppointment,
} from '@/lib/actions/appointment.actions'
import {
	CreateAppointmentFormData,
	CancelAppointmentFormData,
	ScheduleAppointmentFormData,
} from '@/lib/types/zod'

// Create Appointment
export async function handleCreateAppointment(
	appointmentFormValues: CreateAppointmentFormData,
	patientId: string,
	userId: string
) {
	try {
		const createdAppointment = await createAppointment(
			appointmentFormValues,
			patientId,
			userId
		)
	} catch (err) {
		console.error(err)
	}
}

// Cancel Appointment
export async function handleCancelAppointment(
	appointmentFormValues: CancelAppointmentFormData
) {
	try {
		const cancelledApointment = await cancelAppointment(appointmentFormValues)
	} catch (err) {
		console.error(err)
	}
}

// Schedule Appointment
export async function handleScheduleAppointment(
	appointmentFormValues: ScheduleAppointmentFormData
) {
	try {
		const scheduledApointment = await scheduleAppointment(appointmentFormValues)
	} catch (err) {
		console.error(err)
	}
}
