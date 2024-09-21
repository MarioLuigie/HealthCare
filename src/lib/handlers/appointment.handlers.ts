// lib
import {
  createAppointment,
  cancelAppointment,
  scheduleAppointment,
} from "@/lib/actions/appointment.actions"
import {
  CreateAppointmentFormValues,
  CancelAppointmentFormValues,
  ScheduleAppointmentFormValues,
} from "@/lib/types/zod"
import { Appointment } from "@/lib/types/appwrite.types"

// Create Appointment
export async function handleCreateAppointment(
  appointmentFormValues: CreateAppointmentFormValues,
  patientId: string,
  userId: string
) {
  try {
    const createdAppointment = await createAppointment(
      appointmentFormValues,
      patientId,
      userId
    )

    return createdAppointment
  } catch (err) {
    console.error(err)
  }
}

// Cancel Appointment
export async function handleCancelAppointment(
  appointment: Appointment,
  params: SingleSlugParams
) {
  try {
    const cancelledAppointment = await cancelAppointment(appointment, params)
  } catch (err) {
    console.error(err)
  }
}

// Schedule Appointment
export async function handleScheduleAppointment(
  appointmentFormValues: ScheduleAppointmentFormValues
) {
  try {
    const scheduledApointment = await scheduleAppointment(appointmentFormValues)
  } catch (err) {
    console.error(err)
  }
}

// Finish Appointment
export async function handleFinishAppointment(
  appointmentFormValues: ScheduleAppointmentFormValues
) {
  try {
    const scheduledApointment = await scheduleAppointment(appointmentFormValues)
  } catch (err) {
    console.error(err)
  }
}
