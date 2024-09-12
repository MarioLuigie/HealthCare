import {
	createAppointment,
	cancelAppointment,
	scheduleAppointment,
} from '@/lib/actions/appointment.actions'

// Create Appointment
export async function handleCreateAppointment(
	formData: any,
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
export async function handleCancelAppointment(formData: any) {
	try {
		const cancelledApointment = await cancelAppointment()
	} catch (err) {
		console.error(err)
	}
}

// Schedule Appointment
export async function handleScheduleAppointment(formData: any) {
	try {
		const scheduledApointment = await scheduleAppointment()
	} catch (err) {
		console.error(err)
	}
}
