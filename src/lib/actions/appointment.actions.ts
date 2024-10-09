'use server'
// modules
import { revalidatePath } from 'next/cache'
import { ID, Query } from 'node-appwrite'
import auth from '@/auth'
// lib
import {
	APPWRITE_DB_ID,
	APPWRITE_DB_APPOINTMENT_COLLECTION_ID,
	APPWRITE_DB_PATIENT_COLLECTION_ID,
	APPWRITE_DB_CHANGE_STATUS_COLLECTION_ID,
	createAdminClient,
} from '@/lib/appwrite.config'
import { ActionTypes, Status } from '@/lib/types/enums'
import { InitialCounts, AppointmentsOrderedByStatus } from '@/lib/types/types'
import { Route } from '@/lib/constants/paths'
import { CreateAppointmentFormValues } from '@/lib/types/zod'
import { deepClone, generateUrl } from '@/lib/utils'
import { Appointment } from '@/lib/types/appwrite.types'
import { getPatient } from './patient.actions'

// Get Appointment
export async function getAppointment(appointmentId: string) {
	const { databases } = await createAdminClient()

	try {
		const appointment = await databases.getDocument(
			APPWRITE_DB_ID!,
			APPWRITE_DB_APPOINTMENT_COLLECTION_ID!,
			appointmentId
		)

		return {
			success: true,
			data: appointment,
			message: 'Data downloaded with successfully.',
		}
	} catch (err: any) {
		console.error('Error fetching appointment:', err)
		return {
			success: false,
			message: 'An error occurred while downloading data.',
		}
	}
}

// Get Appointments ordered by status and all unordered
export async function getAppointmentsOrderedByStatus() {
	const { databases } = await createAdminClient()
	const initialCounts: InitialCounts = {
		scheduledCount: 0,
		pendingCount: 0,
		cancelledCount: 0,
		finishedCount: 0,
	}
	try {
		const appointments = await databases.listDocuments(
			APPWRITE_DB_ID!,
			APPWRITE_DB_APPOINTMENT_COLLECTION_ID!,
			[Query.orderDesc('$createdAt')]
		)

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

		const data: AppointmentsOrderedByStatus = {
			...counts,
			totalCount: appointments.total,
			documents: appointments.documents as Appointment[],
		}

		return {
			success: true,
			data,
			message: 'Data downloaded successfully.',
		}
	} catch (err: any) {
		console.error(err)
		return {
			success: false,
			data: {
				...initialCounts,
				totalCount: 0,
				documents: [],
			},
			message: 'An error occurred while downloading data.',
		}
	}
}

// Create Appointment
export async function createAppointment(
	appointmentFormValues: CreateAppointmentFormValues
) {
	const status: Status = Status.PENDING
	const sessionUser = await auth.getSessionUser()
	const { databases } = await createAdminClient()
	const { data: patient, success} = await getPatient(sessionUser.$id)

	if (!patient || !success) {
		throw new Error('Missing session user data')
	}

	const patientId = patient.$id

	try {
		if (
			!APPWRITE_DB_ID ||
			!APPWRITE_DB_APPOINTMENT_COLLECTION_ID ||
			!APPWRITE_DB_PATIENT_COLLECTION_ID
		) {
			throw new Error('Missing required environment variables')
		}

		const appointmentData: CreateAppointmentData = {
			userId: sessionUser.$id,
			patient: patientId, // relation ship to patient collection
			primaryPhysician: appointmentFormValues.primaryPhysician,
			schedule: new Date(appointmentFormValues.schedule),
			reason: appointmentFormValues.reason,
			note: appointmentFormValues.note,
			status: status,
			statusUpdatesHistory: [],
			cancellationReason: '',
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

		return {
			success: true,
			data: createdAppointment,
			message: 'Appointment created with successfully.'
		}
	} catch (err: any) {
		console.error(err)
		return {
			success: false,
			message: 'An error occured while creating appointment.'
		}
	}
}

// Update Appointment - ex. change appointment status to 'Cancelled'
export async function updateAppointment(
	appointmentId: string,
	appointmentFormValues: any,
	actionType: ActionTypes,
	userId: string | undefined
) {
	const sessionUser = await auth.getSessionUser()
	const sessionUserRole = sessionUser.labels[0]

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
			{
				updaterId: userId,
				sessionUserRole,
				updatedValue: status,
				updatedAt: new Date(),
			}
		)

		const { data: appointmentToUpdate, success } = await getAppointment(appointmentId)

		// Check if appointmentToUpdate exists
		if (!appointmentToUpdate || !success) {
			throw new Error('Appointment not found or invalid appointmentId.')
		}

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
	} catch (err: any) {
		// Logowanie błędów
		console.error('Error while updating appointment:', err)

		// Możemy też zwrócić bardziej opisowy błąd lub odpowiedź do klienta
		return {
			success: false,
			message:
				err.message || 'An error occurred while updating the appointment.',
		}
	}
}

// Finish Appointment - change appointment status to 'Finished'
export async function finishAppointment(appointment: Appointment) {
	const status: Status = Status.FINISHED
	const sessionUser = await auth.getSessionUser()
	const sessionUserRole = sessionUser.labels[0]
	const { databases } = await createAdminClient()

	try {
		const updatedStatusInfo = await databases.createDocument(
			APPWRITE_DB_ID!,
			APPWRITE_DB_CHANGE_STATUS_COLLECTION_ID!,
			ID.unique(),
			{
				updaterId: sessionUser.$id,
				sessionUserRole,
				updatedValue: status,
				updatedAt: new Date(),
			}
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
export async function awaitAppointment(appointment: Appointment) {
	const status: Status = Status.PENDING
	const sessionUser = await auth.getSessionUser()
	const sessionUserRole = sessionUser.labels[0]
	const { databases } = await createAdminClient()

	try {
		// Save to DB and return object with changes status infos
		const updatedStatusInfo = await databases.createDocument(
			APPWRITE_DB_ID!,
			APPWRITE_DB_CHANGE_STATUS_COLLECTION_ID!,
			ID.unique(),
			{
				updaterId: sessionUser.$id,
				sessionUserRole,
				updatedValue: status,
				updatedAt: new Date(),
			}
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
