'use server'

// modules
import {
	APPWRITE_DB_ID,
	APPWRITE_DB_APPOINTMENT_COLLECTION_ID,
	databases,
} from '@/lib/appwrite.config'
import { ID, Query } from 'node-appwrite'

// lib
import { Status } from '@/lib/types/enums'
import {
	CreateAppointmentFormValues,
	CancelAppointmentFormValues,
	ScheduleAppointmentFormValues,
} from '@/lib/types/zod'
import { deepClone } from '@/lib/utils'

// Get Appointment
export async function getAppointment(appointmentId: string) {
	try {
		const appointment = await databases.getDocument(
			APPWRITE_DB_ID!,
			APPWRITE_DB_APPOINTMENT_COLLECTION_ID!,
			appointmentId
		)

		return deepClone(appointment)
	} catch (err) {
		console.error(err)
	}
}

// Create Appoitment
export async function createAppointment(
	appointmentFormValues: CreateAppointmentFormValues,
	patientId: string,
	userId: string
) {
	try {
		const appointmentData: CreateAppointmentData = {
			userId,
			patient: patientId,
			primaryPhysician: appointmentFormValues.primaryPhysician,
			schedule: new Date(appointmentFormValues.schedule),
			reason: appointmentFormValues.reason,
			note: appointmentFormValues.note,
			status: Status.PENDING,
		} 

		const createdAppointment = await databases.createDocument(
			APPWRITE_DB_ID!,
			APPWRITE_DB_APPOINTMENT_COLLECTION_ID!,
			ID.unique(),
			appointmentData
		)

		return deepClone(createdAppointment)

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
