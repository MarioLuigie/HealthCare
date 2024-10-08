'use server'

// modules
import { revalidatePath } from 'next/cache'
import { ID, Query } from 'node-appwrite'

// lib
import {
	APPWRITE_DB_ID,
	APPWRITE_DB_APPOINTMENT_COLLECTION_ID,
	APPWRITE_DB_PATIENT_COLLECTION_ID,
	APPWRITE_DB_CHANGE_STATUS_COLLECTION_ID,
	createAdminClient,
} from '@/lib/appwrite.config'
import { ActionTypes, Status } from '@/lib/types/enums'
import { Route } from '@/lib/constants/paths'
import {
	CreateAppointmentFormValues,
	CancelAppointmentFormValues,
	ScheduleAppointmentFormValues,
} from '@/lib/types/zod'
import { deepClone, generateUrl } from '@/lib/utils'
import { Appointment } from '@/lib/types/appwrite.types'

export interface InitialCounts {
	scheduledCount: number
	pendingCount: number
	cancelledCount: number
	finishedCount: number
}

// Get Appointment
export async function getAppointment(appointmentId: string) {
	const { databases } = await createAdminClient()

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

// Get Appointments ordered by status and all unordered
export async function getAppointmentsOrderedByStatus() {
	const { databases } = await createAdminClient()

	try {
		const appointments = await databases.listDocuments(
			APPWRITE_DB_ID!,
			APPWRITE_DB_APPOINTMENT_COLLECTION_ID!,
			[Query.orderDesc('$createdAt')]
		)

		const initialCounts: InitialCounts = {
			scheduledCount: 0,
			pendingCount: 0,
			cancelledCount: 0,
			finishedCount: 0,
		}

		const counts: InitialCounts = (
			appointments.documents as Appointment[]
		).reduce((acc, currentAppointment) => {
			switch (currentAppointment.status) {
				case Status.SCHEDULED:
					acc.scheduledCount++
					break
				case Status.PENDING:
					acc.pendingCount++
					break
				case Status.CANCELLED:
					acc.cancelledCount++
					break
				case Status.FINISHED:
					acc.finishedCount++
					break
			}
			return acc
		}, initialCounts)

		const data = {
			...counts,
			totalCount: appointments.total,
			documents: appointments.documents,
		}

		return deepClone(data)
	} catch (err) {
		console.error(err)
	}
}

// Create Appointment
export async function createAppointment(
	appointmentFormValues: CreateAppointmentFormValues,
	patientId: string,
	userId: string
) {
	const status: Status = Status.PENDING
	const { databases } = await createAdminClient()

	try {
		if (
			!APPWRITE_DB_ID ||
			!APPWRITE_DB_APPOINTMENT_COLLECTION_ID ||
			!APPWRITE_DB_PATIENT_COLLECTION_ID
		) {
			throw new Error('Missing required environment variables')
		}

		const appointmentData: CreateAppointmentData = {
			userId,
			patient: patientId, // relation ship to patient collection
			primaryPhysician: appointmentFormValues.primaryPhysician,
			schedule: new Date(appointmentFormValues.schedule),
			reason: appointmentFormValues.reason,
			note: appointmentFormValues.note,
			status: status,
			statusUpdatesHistory: [],
			cancellationReason: ''
		}

		// !!Do it!! - Type returned object by Appointment interface
		const createdAppointment = await databases.createDocument(
			APPWRITE_DB_ID!,
			APPWRITE_DB_APPOINTMENT_COLLECTION_ID!,
			ID.unique(),
			appointmentData
		)

		// Add created appointment to appointments list of patient
		if (createdAppointment) {
			const updatedAppointments = [
				...createdAppointment.patient.appointments,
				createdAppointment.$id,
			]

			// Update patient appointments list - overwrite appointments of patient with updatedAppointments list
			await databases.updateDocument(
				APPWRITE_DB_ID!,
				APPWRITE_DB_PATIENT_COLLECTION_ID!,
				patientId,
				{ appointments: updatedAppointments }
			)
		}

		return deepClone(createdAppointment)
	} catch (err) {
		console.error(err)
	}
}

// Update Appointment - ex. change appointment status to 'Cancelled'
export async function updateAppointment(
	appointmentId: string,
	appointmentFormValues: any,
	params: SingleSlugParams,
	actionType: ActionTypes
) {
	const { role, id } = params
	let status = null
	const { databases } = await createAdminClient()

	if (actionType === ActionTypes.CANCEL) {
		status = Status.CANCELLED
	} else if (actionType === ActionTypes.SCHEDULE) {
		status = Status.SCHEDULED
	}
	
	try {
		// Save to DB and return object with changes status infos
		// !! Change to appointmentChangeLog name
		const updatedStatusInfo = await databases.createDocument(
			APPWRITE_DB_ID!,
			APPWRITE_DB_CHANGE_STATUS_COLLECTION_ID!,
			ID.unique(),
			{ updaterId: id, role, updatedValue: status, updatedAt: new Date() }
		)

		const appointmentToUpdate = await getAppointment(appointmentId)

		// Save to DB and Return appointment with status changed to 'Cancelled' or 'Scheduled'
		const updatedAppointment = await databases.updateDocument(
			APPWRITE_DB_ID!,
			APPWRITE_DB_APPOINTMENT_COLLECTION_ID!,
			appointmentId,
			{
				status,
				...appointmentFormValues,
				statusUpdatesHistory: [
					...appointmentToUpdate.statusUpdatesHistory,
					updatedStatusInfo.$id,
				],
			}
		) // !! Change statusUpdatesHistory to changeLogHistory

		revalidatePath(generateUrl([Route.DASHBOARD]))

		return deepClone(updatedAppointment)
	} catch (err) {
		console.error(err)
	}
}

// Finish Appointment - change appointment status to 'Finished'
export async function finishAppointment(
	appointment: Appointment,
	params: SingleSlugParams
) {
	const status: Status = Status.FINISHED
	const { role, id } = params
	const { databases } = await createAdminClient()

	try {
		const updatedStatusInfo = await databases.createDocument(
			APPWRITE_DB_ID!,
			APPWRITE_DB_CHANGE_STATUS_COLLECTION_ID!,
			ID.unique(),
			{ updaterId: id, role, updatedValue: status, updatedAt: new Date() }
		)

		console.log('***', Object.keys(appointment))

		const finihedAppointment = await databases.updateDocument(
			APPWRITE_DB_ID!,
			APPWRITE_DB_APPOINTMENT_COLLECTION_ID!,
			appointment.$id,
			{
				status,
				statusUpdatesHistory: [
					...appointment.statusUpdatesHistory,
					updatedStatusInfo.$id,
				],
			}
		)

		revalidatePath(generateUrl([Route.DASHBOARD]))

		return deepClone(finihedAppointment)
	} catch (err) {
		console.error(err)
	}
}

// Await Appointment - change appointment status to 'Pending'
export async function awaitAppointment(
	appointment: Appointment,
	params: SingleSlugParams
) {
	const status: Status = Status.PENDING
	const { role, id } = params
	const { databases } = await createAdminClient()

	try {
		// Save to DB and return object with changes status infos
		const updatedStatusInfo = await databases.createDocument(
			APPWRITE_DB_ID!,
			APPWRITE_DB_CHANGE_STATUS_COLLECTION_ID!,
			ID.unique(),
			{ updaterId: id, role, updatedValue: status, updatedAt: new Date() }
		)

		const awaitedAppointment = await databases.updateDocument(
			APPWRITE_DB_ID!,
			APPWRITE_DB_APPOINTMENT_COLLECTION_ID!,
			appointment.$id,
			{
				status,
				statusUpdatesHistory: [
					...appointment.statusUpdatesHistory,
					updatedStatusInfo.$id,
				],
			}
		)

		revalidatePath(generateUrl([Route.DASHBOARD]))

		return deepClone(awaitedAppointment)
	} catch (err) {
		console.error(err)
	}
}

// // Cancel Appointment - change appointment status to 'Cancelled'
// export async function cancelAppointment(
// 	appointment: Appointment,
// 	params: SingleSlugParams
// ) {
// 	const status: Status = Status.CANCELLED
// 	const { role, id } = params
// 	try {
// 		// Save to DB and return object with changes status infos
// 		const updatedStatusInfo = await databases.createDocument(
// 			APPWRITE_DB_ID!,
// 			APPWRITE_DB_CHANGE_STATUS_COLLECTION_ID!,
// 			ID.unique(),
// 			{ updaterId: id, role, updatedValue: status, updatedAt: new Date() }
// 		)

// 		// Save to DB and Return appointment with status changed to 'Cancelled'
// 		const cancelledAppointment = await databases.updateDocument(
// 			APPWRITE_DB_ID!,
// 			APPWRITE_DB_APPOINTMENT_COLLECTION_ID!,
// 			appointment.$id,
// 			{
// 				status,
// 				statusUpdatesHistory: [
// 					...appointment.statusUpdatesHistory,
// 					updatedStatusInfo.$id,
// 				],
// 			}
// 		)

// 		revalidatePath(generateUrl([Route.DASHBOARD, role, id]))

// 		return deepClone(cancelledAppointment)
// 	} catch (err) {
// 		console.error(err)
// 	}
// }

// // Schedule Appointment - change appointment status to 'Scheduled'
// export async function scheduleAppointment(
// 	appointment: Appointment,
// 	params: SingleSlugParams
// ) {
// 	const status: Status = Status.SCHEDULED
// 	const { role, id } = params
// 	try {
// 		// Save to DB and return object with changes status infos
// 		const updatedStatusInfo = await databases.createDocument(
// 			APPWRITE_DB_ID!,
// 			APPWRITE_DB_CHANGE_STATUS_COLLECTION_ID!,
// 			ID.unique(),
// 			{ updaterId: id, role, updatedValue: status, updatedAt: new Date() }
// 		)

// 		const scheduledAppointment = await databases.updateDocument(
// 			APPWRITE_DB_ID!,
// 			APPWRITE_DB_APPOINTMENT_COLLECTION_ID!,
// 			appointment.$id,
// 			{
// 				status,
// 				statusUpdatesHistory: [
// 					...appointment.statusUpdatesHistory,
// 					updatedStatusInfo.$id,
// 				],
// 			}
// 		)

// 		revalidatePath(generateUrl([Route.DASHBOARD, role, id]))

// 		return deepClone(scheduledAppointment)
// 	} catch (err) {
// 		console.error(err)
// 	}
// }