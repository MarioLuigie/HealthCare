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
    // !!Type returned object by Appointment interface!!
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

// Cancel Appointment but not delete
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

  } catch (err) {
    console.error(err)
  }
}

// Finish Appointment but not delete
export async function handleFinishAppointment(
  appointmentFormValues: ScheduleAppointmentFormValues
) {
  try {

  } catch (err) {
    console.error(err)
  }
}
