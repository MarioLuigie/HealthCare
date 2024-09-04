import { z } from 'zod'

export const PatientformSchema = z.object({
  username: z.string().min(2).max(50),
})

export type PatientFormData = z.infer<typeof PatientformSchema>