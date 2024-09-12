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
	formData: CreateAppointmentFormData,
	patientId: string,
	userId: string
) {
	try {
		const createdAppointment = await createAppointment(
			formData,
			patientId,
			userId
		)
	} catch (err) {
		console.error(err)
	}
}

// Cancel Appointment
export async function handleCancelAppointment(
	formData: CancelAppointmentFormData
) {
	try {
		const cancelledApointment = await cancelAppointment(formData)
	} catch (err) {
		console.error(err)
	}
}

// Schedule Appointment
export async function handleScheduleAppointment(
	formData: ScheduleAppointmentFormData
) {
	try {
		const scheduledApointment = await scheduleAppointment(formData)
	} catch (err) {
		console.error(err)
	}
}
