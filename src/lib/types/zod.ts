import { z } from 'zod'

export const PatientformSchema = z.object({
	username: z
		.string()
		.min(2, { message: 'Username must be at least 2 characters.' })
		.max(50, { message: 'Username must be at most 50 characters.' }),
})

export type PatientFormData = z.infer<typeof PatientformSchema>
