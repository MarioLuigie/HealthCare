"use server"

// modules
import { revalidatePath } from "next/cache"
import { ID, Query } from "node-appwrite"

// lib
import {
  APPWRITE_DB_ID,
  APPWRITE_DB_APPOINTMENT_COLLECTION_ID,
  APPWRITE_DB_PATIENT_COLLECTION_ID,
  databases,
} from "@/lib/appwrite.config"
import { Status } from "@/lib/types/enums"
import { Route } from "@/lib/constants/paths"
import {
  CreateAppointmentFormValues,
  CancelAppointmentFormValues,
  ScheduleAppointmentFormValues,
} from "@/lib/types/zod"
import { deepClone, generateUrl } from "@/lib/utils"
import { Appointment } from "@/lib/types/appwrite.types"

export interface InitialCounts {
  scheduledCount: number
  pendingCount: number
  cancelledCount: number
  finishedCount: number
}

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

// Get Appointments ordered by status and all unordered
export async function getAppointmentsOrderedByStatus() {
  try {
    const appointments = await databases.listDocuments(
      APPWRITE_DB_ID!,
      APPWRITE_DB_APPOINTMENT_COLLECTION_ID!,
      [Query.orderDesc("$createdAt")]
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

// Create Appoitment
export async function createAppointment(
  appointmentFormValues: CreateAppointmentFormValues,
  patientId: string,
  userId: string
) {
  const status: Status = Status.PENDING
  try {
    if (
      !APPWRITE_DB_ID ||
      !APPWRITE_DB_APPOINTMENT_COLLECTION_ID ||
      !APPWRITE_DB_PATIENT_COLLECTION_ID
    ) {
      throw new Error("Missing required environment variables")
    }

    const appointmentData: CreateAppointmentData = {
      userId,
      patient: patientId, // relation ship to patient collection
      primaryPhysician: appointmentFormValues.primaryPhysician,
      schedule: new Date(appointmentFormValues.schedule),
      reason: appointmentFormValues.reason,
      note: appointmentFormValues.note,
      status: status,
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

      // Update patient appointments list - overwrite appointments of patient with updatedAppointments
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

// Cancel Appointment - change appointment status to 'Cancelled'
export async function cancelAppointment(
  appointment: Appointment,
  params: SingleSlugParams
) {
  const status: Status = Status.CANCELLED
  const { role, id } = params
  try {
    // Save to DB and Return appointment with status changed to 'Cancelled'
    const cancelledAppointment = await databases.updateDocument(
      APPWRITE_DB_ID!,
      APPWRITE_DB_APPOINTMENT_COLLECTION_ID!,
      appointment.$id,
      { status: status }
    )

    revalidatePath(generateUrl([Route.DASHBOARD, role, id]))

    return deepClone(cancelledAppointment)
  } catch (err) {
    console.error(err)
  }
}

// Schedule Appointment - change appointment status to 'Scheduled'
export async function scheduleAppointment(
  appointment: Appointment,
  params: SingleSlugParams
) {
  const status: Status = Status.SCHEDULED
  const { role, id } = params
  try {
    const scheduledAppointment = await databases.updateDocument(
      APPWRITE_DB_ID!,
      APPWRITE_DB_APPOINTMENT_COLLECTION_ID!,
      appointment.$id,
      { status: status }
    )

    revalidatePath(generateUrl([Route.DASHBOARD, role, id]))

    return deepClone(scheduledAppointment)
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
  try {
    const finihedAppointment = await databases.updateDocument(
      APPWRITE_DB_ID!,
      APPWRITE_DB_APPOINTMENT_COLLECTION_ID!,
      appointment.$id,
      { status: status }
    )

    revalidatePath(generateUrl([Route.DASHBOARD, role, id]))

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
  try {
    const awaitedAppointment = await databases.updateDocument(
      APPWRITE_DB_ID!,
      APPWRITE_DB_APPOINTMENT_COLLECTION_ID!,
      appointment.$id,
      { status: status }
    )

    revalidatePath(generateUrl([Route.DASHBOARD, role, id]))

    return deepClone(awaitedAppointment)
  } catch (err) {
    console.error(err)
  }
}
