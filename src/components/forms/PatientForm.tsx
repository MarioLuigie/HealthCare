'use client'

// modules
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
// lib
import { PatientformSchema, PatientFormData } from '@/lib/types/zod'
// components
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'

export default function PatientForm() {
	const form = useForm<PatientFormData>({
		resolver: zodResolver(PatientformSchema),
		defaultValues: {
			username: '',
		},
	})

	const onSubmit: SubmitHandler<PatientFormData> = (
		data: PatientFormData
	) => {}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="Enter your user name here" {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	)
}
