'use client'

// modules
import { Control } from 'react-hook-form'
import Image from 'next/image'
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
import { Textarea } from '@/components/ui/textarea'

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

const RenderInput = ({
	field,
	props,
}: {
	field: any
	props: CustomFormFieldProps
}) => {
	switch (props.type) {
		case FormFieldType.INPUT:
			return (
				<div className="flex rounded-md border border-dark-500 bg-dark-400">
					{props.iconSrc && (
						<Image
							src={props.iconSrc}
							height={24}
							width={24}
							alt={props.iconAlt || 'icon'}
							className="ml-2"
						/>
					)}
					<FormControl>
						<Input
							{...field}
							placeholder={props.placeholder}
							className="shad-input border-0"
							disabled={props.disabled}
						/>
					</FormControl>
				</div>
			)

		case FormFieldType.TEXTAREA:
			return (
				<FormControl>
					<Textarea
						{...field}
						placeholder={props.placeholder}
						className="shad-textArea"
						disabled={props.disabled}
					/>
				</FormControl>
			)
	}
}

export default function CustomFormField(props: CustomFormFieldProps) {
	const {
		control,
		type,
		name,
		label,
		placeholder,
		description,
		disabled = false,
		iconSrc,
		iconAlt,
		dateFormat,
		showTimeSelect,
		children,
		renderSkeleton,
	} = props

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					{type !== FormFieldType.CHECKBOX && label && (
						<FormLabel>{label}</FormLabel>
					)}
					<RenderInput field={field} props={props} />
					{props.description && (
						<FormDescription>{props.description}</FormDescription>
					)}
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
