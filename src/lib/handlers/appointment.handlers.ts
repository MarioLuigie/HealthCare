// lib
import {
  createAppointment,
  updateAppointment,
  // cancelAppointment,
  // scheduleAppointment,
  finishAppointment,
  awaitAppointment,
} from "@/lib/actions/appointment.actions"
import {
  CreateAppointmentFormValues,
  // CancelAppointmentFormValues,
  // ScheduleAppointmentFormValues,
} from "@/lib/types/zod"
import { Appointment } from "@/lib/types/appwrite.types"
import { ActionTypes, Roles } from "@/lib/types/enums"

// Create Appointment
export async function handleCreateAppointment(
  appointmentFormValues: CreateAppointmentFormValues,
) {
  try {
    // !!Type returned object by Appointment interface!!
    const createdAppointment = await createAppointment(
      appointmentFormValues,
    )

    return createdAppointment
  } catch (err) {
    console.error(err)
  }
}


// Cancel Appointment but not delete
export async function handleUpdateAppointment(
  appointmentId: string,
  appointmentFormValues: any,
  actionType: ActionTypes,
  userId: string | undefined,
) {
  try {
    const updatedAppointment = await updateAppointment(appointmentId, appointmentFormValues, actionType, userId)

    return updatedAppointment

    // console.log('Cancelled Appointment:', cancelledAppointment)
  } catch (err) {
    console.error(err)
  }
}

// Finish Appointment but not delete
export async function handleFinishAppointment(
  appointment: Appointment,
) {
  try {
    const finishedAppointment = await finishAppointment(appointment)
  } catch (err) {
    console.error(err)
  }
}

// Await Appointment 
export async function handleAwaitAppointment(
  appointment: Appointment,
) {
  try {
    const awaitedAppointment = await awaitAppointment(appointment)
  } catch (err) {
    console.error(err)
  }
}
