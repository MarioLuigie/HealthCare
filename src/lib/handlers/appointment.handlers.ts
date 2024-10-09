// lib
import {
	createAppointment,
	updateAppointment,
	// cancelAppointment,
	// scheduleAppointment,
	finishAppointment,
	awaitAppointment,
} from '@/lib/actions/appointment.actions'
import {
	CreateAppointmentFormValues,
	// CancelAppointmentFormValues,
	// ScheduleAppointmentFormValues,
} from '@/lib/types/zod'
import { Appointment } from '@/lib/types/appwrite.types'
import { ActionTypes } from '@/lib/types/enums'

// Create Appointment
export async function handleCreateAppointment(
	appointmentFormValues: CreateAppointmentFormValues
) {
	try {
		// !!Type returned object by Appointment interface!!
		const result = await createAppointment(appointmentFormValues)

		return result
	} catch (err: any) {
		console.error(err)
		throw new Error('An error occured while creating appointment.')
	}
}

// Cancel Appointment but not delete
export async function handleUpdateAppointment(
	appointmentId: string,
	appointmentFormValues: any,
	actionType: ActionTypes,
	userId: string | undefined
) {
	try {
		const result = await updateAppointment(
			appointmentId,
			appointmentFormValues,
			actionType,
			userId
		)

		return result
		// console.log('Cancelled Appointment:', cancelledAppointment)
	} catch (err) {
		console.error(err)
		throw new Error('An error occured while creating appointment.')
	}
}

// Finish Appointment but not delete
export async function handleFinishAppointment(appointment: Appointment) {
	try {
		const result = await finishAppointment(appointment)

	} catch (err: any) {
		console.error(err)
		throw new Error('An error occured while finishing appointment.')
	}
}

// Await Appointment
export async function handleAwaitAppointment(appointment: Appointment) {
	try {
		const awaitedAppointment = await awaitAppointment(appointment)
	} catch (err: any) {
		console.error(err)
	}
}
