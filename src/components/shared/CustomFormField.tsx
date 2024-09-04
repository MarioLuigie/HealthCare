'use client'

// modules
import { Control } from 'react-hook-form'
// lib
import { FormFieldType } from '@/lib/types/enums'
// components
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

interface CustomFormFieldProps {
	control: Control<any>
	type: FormFieldType
	name: string
	label?: string
	placeholder?: string
	description?: string
	disabled?: boolean
	iconSrc?: string
	iconAlt?: string
	dateFormat?: string
	showTimeSelect?: boolean
	children?: React.ReactNode
	renderSkeleton?: (field: any) => React.ReactNode
}

export default function CustomFormField({
	control,
	type,
	name,
	label,
	placeholder,
	description,
	disabled,
	iconSrc,
	iconAlt,
	dateFormat,
	showTimeSelect,
	children,
	renderSkeleton,
}: CustomFormFieldProps) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					{type !== FormFieldType.CHECKBOX && label && (
						<FormLabel>{label}</FormLabel>
					)}
					<FormControl>
						<Input placeholder={placeholder} {...field} />
					</FormControl>
					<FormDescription>{description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
