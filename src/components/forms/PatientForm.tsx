'use client'

// modules
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter, usePathname } from 'next/navigation'
// lib
import { PatientFormSchema, PatientFormValues } from '@/lib/types/zod'
import { FormFieldType, Gender } from '@/lib/types/enums'
import { handleRegisterPatient } from '@/lib/handlers/patient.handlers'
import { Icons } from '@/lib/constants'
import {
	doctors,
	identificationDocumentTypes,
	PatientFormDefaultValues,
} from '@/lib/constants'
// components
import { Form, FormControl } from '@/components/ui/form'
import SubmitButton from '@/components/shared/buttons/SubmitButton'
import CustomFormField from '@/components/shared/CustomFormField'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { SelectItem } from '@/components/ui/select'
import FileUploader from '@/components/shared/FileUploader'
// Styles
import 'react-datepicker/dist/react-datepicker.css'
import { Route } from '@/lib/constants/paths'
import { generateUrl } from '@/lib/utils'
import UserAvatar from '@/components/content/UserAvatar'

type PatientFormProps = {
	user: any
	handleCloseDialog?: () => void
}

export default function PatientForm({
	user,
	handleCloseDialog,
}: PatientFormProps) {
	const router = useRouter()
	const pathname = usePathname()

	console.log('*** PATHANAME', pathname)

	const form = useForm<PatientFormValues>({
		resolver: zodResolver(PatientFormSchema),
		defaultValues: {
			...PatientFormDefaultValues,
			name: user.name,
			email: user.email,
			// phone: user.phone,
		},
	})

	const { isSubmitting } = form.formState

	const onSubmit: SubmitHandler<PatientFormValues> = async (
		patientFormValues: PatientFormValues
	) => {
		try {
			const { data: patient, success } = await handleRegisterPatient(
				patientFormValues,
				user.$id
			)

			if (patient && success) {
				if (pathname === Route.DASHBOARD) {
					router.push(generateUrl([Route.DASHBOARD]))
				} else {
					router.push(
						generateUrl([
							Route.PATIENTS,
							user.$id,
							Route.CREATE_APPOINTMENT,
						])
					)
				}

				if (handleCloseDialog) {
					handleCloseDialog()
				}

				form.reset()
			} else {
				console.error('Something went wrong with registering patient.')
				throw new Error('Failed to register patient.')
			}

			// console.log('***patient', patient) // without FormData files
		} catch (err: any) {
			console.error(
				'Error from onSubmit for PatientForm while registering patient',
				err
			)
			throw new Error('An error occured while registering patient.')
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-6"
			>
				{/* PERSONAL INFORMATION */}
				<section className="space-y-6">
					<div className="space-y-1">
						<h2 className="sub-header">Personal information</h2>
					</div>
				</section>
				{/* Name */}
				<CustomFormField
					control={form.control}
					typeField={FormFieldType.INPUT}
					name="name"
					label="Full name"
					placeholder="ex: James Smith"
					iconSrc={Icons.USER_ICON.path}
					iconAlt={Icons.USER_ICON.alt}
				/>
				{/* Email Phone */}
				<div className="flex flex-col lg:flex-row gap-4">
					<CustomFormField
						control={form.control}
						typeField={FormFieldType.INPUT}
						name="email"
						label="Email address"
						iconSrc={Icons.EMAIL_ICON.path}
						iconAlt={Icons.EMAIL_ICON.alt}
					/>
					{/* <CustomFormField
            control={form.control}
            typeField={FormFieldType.INPUT}
            name="phone"
            label="Phone"
            iconSrc={Icons.PHONE_ICON.path}
            iconAlt={Icons.PHONE_ICON.alt}
          /> */}
					<CustomFormField
						control={form.control}
						typeField={FormFieldType.PHONE_INPUT}
						name="phone"
						label="Phone"
					/>
				</div>
				{/* Date of birth and Gender */}
				<div className="flex flex-col lg:flex-row gap-4">
					<CustomFormField
						control={form.control}
						typeField={FormFieldType.DATE_PICKER}
						name="birthDate"
						label="Date of birth"
						placeholder="Select your birth"
					/>
					<CustomFormField
						control={form.control}
						typeField={FormFieldType.SKELETON}
						name="gender"
						label="Gender"
						renderSkeleton={(field) => (
							<FormControl>
								<RadioGroup
									className="flex gap-2 h-11 lg:justify-between"
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									{Object.values(Gender).map(
										(option: string, i: number) => (
											<div key={option + i} className="radio-group border-dark-500 bg-input">
												<RadioGroupItem
													value={option}
													id={option}
												/>
												<Label
													htmlFor={option}
													className="cursor-pointer text-textPrimary"
												>
													{option}
												</Label>
											</div>
										)
									)}
								</RadioGroup>
							</FormControl>
						)}
					/>
				</div>
				{/* Address and Occupation */}
				<div className="flex flex-col lg:flex-row gap-4">
					<CustomFormField
						control={form.control}
						typeField={FormFieldType.INPUT}
						name="address"
						label="Address"
						placeholder="ex: 12th Street, New York"
					/>
					<CustomFormField
						control={form.control}
						typeField={FormFieldType.INPUT}
						name="occupation"
						label="Occupation"
						placeholder="ex: Architect"
					/>
				</div>
				{/* Emergency Contact Name and Phone */}
				<div className="flex flex-col lg:flex-row gap-4">
					<CustomFormField
						control={form.control}
						typeField={FormFieldType.INPUT}
						name="emergencyContactName"
						label="Emergency contact name"
						placeholder="Guardian's name"
					/>
					<CustomFormField
						control={form.control}
						typeField={FormFieldType.PHONE_INPUT}
						name="emergencyContactNumber"
						label="Emergency contact number"
					/>
				</div>
				{/* MEDICAL INFORMATION */}
				<section className="space-y-6 pt-4">
					<div className="space-y-1">
						<h2 className="sub-header">Medical information</h2>
					</div>
				</section>
				{/* Primary care physician */}
				<CustomFormField
					control={form.control}
					typeField={FormFieldType.SELECT}
					name="primaryPhysician"
					label="Primary physician"
					placeholder="Select a physician"
				>
					{doctors.map((doctor, i) => (
						<SelectItem
							key={doctor.name + i}
							value={doctor.name}
							className="cursor-pointer"
						>
							<UserAvatar user={doctor} />
						</SelectItem>
					))}
				</CustomFormField>
				{/* Insurance */}
				<div className="flex flex-col lg:flex-row gap-4">
					<CustomFormField
						control={form.control}
						typeField={FormFieldType.INPUT}
						name="insuranceProvider"
						label="Insurance provider"
						placeholder="ex: Nationale Nederlanden"
					/>
					<CustomFormField
						control={form.control}
						typeField={FormFieldType.INPUT}
						name="insurancePolicyNumber"
						label="Insurance policy number"
						placeholder="ex: ABC123456789"
					/>
				</div>
				{/* Allergies */}
				<div className="flex flex-col lg:flex-row gap-4">
					<CustomFormField
						control={form.control}
						typeField={FormFieldType.TEXTAREA}
						name="allergies"
						label="Allergies (if any)"
						placeholder="ex: Peanuts, Penicilin, Pollen..."
					/>
					<CustomFormField
						control={form.control}
						typeField={FormFieldType.TEXTAREA}
						name="currentMedications"
						label="Current madications"
						placeholder="ex: Ibuprofen 200mg, Paracetamol 500mg"
					/>
				</div>
				{/* Medical histories */}
				<div className="flex flex-col lg:flex-row gap-4">
					<CustomFormField
						control={form.control}
						typeField={FormFieldType.TEXTAREA}
						name="familyMedicalHistory"
						label="Family medical history"
						placeholder="ex: Grandmother had cancer"
					/>
					<CustomFormField
						control={form.control}
						typeField={FormFieldType.TEXTAREA}
						name="pastMedicalHistory"
						label="Past medical history"
						placeholder="ex: Asthma diagnosis in childhood"
					/>
				</div>
				{/* IDENTIFICATION AND VERIFICATION */}
				<section className="space-y-6 pt-4">
					<div className="space-y-1">
						<h2 className="sub-header">
							Identification and Verification
						</h2>
					</div>
				</section>
				{/* Identification type */}
				<CustomFormField
					control={form.control}
					typeField={FormFieldType.SELECT}
					name="identificationType"
					label="Identification type"
					placeholder="Select an identification type"
				>
					{identificationDocumentTypes.map((type, i) => (
						<SelectItem
							key={type + i}
							value={type}
							className="cursor-pointer"
						>
							<p>{type}</p>
						</SelectItem>
					))}
				</CustomFormField>
				{/* Identification number */}
				<CustomFormField
					control={form.control}
					typeField={FormFieldType.INPUT}
					name="identificationNumber"
					label="Identification number"
					placeholder="ex: 123456789"
				/>
				{/* Scanned copy of identification document */}
				<CustomFormField
					control={form.control}
					typeField={FormFieldType.SKELETON}
					name="identificationDocuments"
					label="Scanned copy of identification document"
					renderSkeleton={(field) => (
						<FormControl>
							<FileUploader
								files={field.value}
								onChange={field.onChange}
							/>
						</FormControl>
					)}
				/>
				{/* CONSENT AND PRIVACY */}
				<section className="space-y-3 pt-4">
					<div className="space-y-1">
						<h2 className="sub-header">Consent and Privacy</h2>
					</div>
					<CustomFormField
						typeField={FormFieldType.CHECKBOX}
						control={form.control}
						name="treatmentConsent"
						label="I consent to receive treatment for my health condition."
					/>
					<CustomFormField
						typeField={FormFieldType.CHECKBOX}
						control={form.control}
						name="disclosureConsent"
						label="I consent to the use and disclosure of my health
            information for treatment purposes."
					/>
					<CustomFormField
						typeField={FormFieldType.CHECKBOX}
						control={form.control}
						name="privacyConsent"
						label="I acknowledge that I have reviewed and agree to the
            privacy policy"
					/>
				</section>
				<SubmitButton
					isLoading={isSubmitting}
					className="w-full"
					variant="fill"
				>
					Register and Continue
				</SubmitButton>
			</form>
		</Form>
	)
}

// FILE STRUCTURE FROM FORMDATA FILES IN 'files[]' key
{
	/*
files[] 
File {name: 'MVC.jpg', lastModified: 1725872490949, lastModifiedDate: Mon Sep 09 2024 11:01:30 GMT+0200 (czas środkowoeuropejski letni), webkitRelativePath: '', size: 55370, …}
lastModified
: 
1725872490949
lastModifiedDate
: 
Mon Sep 09 2024 11:01:30 GMT+0200 (czas środkowoeuropejski letni) {}
name
: 
"MVC.jpg"
size
: 
55370
type
: 
"image/jpeg"
webkitRelativePath
: 
""
[[Prototype]]
: 
File
*/
}
