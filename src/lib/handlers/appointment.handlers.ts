// lib
import {
  createAppointment,
  cancelAppointment,
  scheduleAppointment,
  finishAppointment,
  awaitAppointment,
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

    // console.log('Cancelled Appointment:', cancelledAppointment)
  } catch (err) {
    console.error(err)
  }
}

// Schedule Appointment
export async function handleScheduleAppointment(
  appointment: Appointment,
  params: SingleSlugParams,
) {
  try {
    const scheduledAppointment = await scheduleAppointment(appointment, params)
  } catch (err) {
    console.error(err)
  }
}

// Finish Appointment but not delete
export async function handleFinishAppointment(
  appointment: Appointment,
  params: SingleSlugParams,
) {
  try {
    const finishedAppointment = await finishAppointment(appointment, params)
  } catch (err) {
    console.error(err)
  }
}

// Await Appointment 
export async function handleAwaitAppointment(
  appointment: Appointment,
  params: SingleSlugParams,
) {
  try {
    const awaitedAppointment = await awaitAppointment(appointment, params)
  } catch (err) {
    console.error(err)
  }
}
