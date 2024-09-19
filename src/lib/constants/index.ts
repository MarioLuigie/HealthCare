import { Gender } from '@/lib/types/enums'
import { PatientFormValues } from '@/lib/types/zod'
import { ImagePath, IconPath, DoctorPath } from '@/lib/constants/paths'

// PatientForm default data
export const PatientFormDefaultValues: PatientFormValues = {
	name: '',
	email: '',
	phone: '',
	birthDate: new Date('01-01-1900'),
	gender: Gender.MALE,
	address: '',
	occupation: '',
	emergencyContactName: '',
	emergencyContactNumber: '',
	primaryPhysician: '',
	insuranceProvider: '',
	insurancePolicyNumber: '',
	allergies: '',
	currentMedication: '',
	familyMedicalHistory: '',
	pastMedicalHistory: '',
	identificationType: '',
	identificationNumber: '',
	identificationDocuments: [] as File[],
	treatmentConsent: false,
	disclosureConsent: false,
	privacyConsent: false,
}

// AppointmentForm default values
export const CreateAppointmentFormDefaultValues = {
	primaryPhysician: '',
	schedule: new Date(),
	reason: '',
	note: '',
	cancellationReason: '',
}

export const CancelAppointmentFormDefaultValues = {
	primaryPhysician: '',
	schedule: new Date(),
	reason: '',
	note: '',
	cancellationReason: '',
}

export const ScheduleAppointmentFormDefaultValues = {
	primaryPhysician: '',
	schedule: new Date(),
	reason: '',
	note: '',
	cancellationReason: '',
}

// Doctors array
export const doctors = [
	{
		image: DoctorPath.GREEN,
		name: 'John Green',
	},
	{
		image: DoctorPath.CAMERON,
		name: 'Leila Cameron',
	},
	{
		image: DoctorPath.LIVINGSTON,
		name: 'David Livingston',
	},
	{
		image: DoctorPath.PETER,
		name: 'Evan Peter',
	},
	{
		image: DoctorPath.POWELL,
		name: 'Jane Powell',
	},
	{
		image: DoctorPath.REMIREZ,
		name: 'Alex Ramirez',
	},
	{
		image: DoctorPath.LEE,
		name: 'Jasmine Lee',
	},
	{
		image: DoctorPath.CRUZ,
		name: 'Alyana Cruz',
	},
	{
		image: DoctorPath.SHARMA,
		name: 'Hardik Sharma',
	},
]

// Types of identification document
export const identificationDocumentTypes = [
	'Birth Certificate',
	"Driver's License",
	'Medical Insurance Card/Policy',
	'Military ID Card',
	'National Identity Card',
	'Passport',
	'Resident Alien Card (Green Card)',
	'Social Security Card',
	'State ID Card',
	'Student ID Card',
	'Voter ID Card',
]

// Kinde of icons
export const Icons = {
	LOGO_FULL: {
		path: IconPath.LOGO_FULL,
		alt: 'Logo',
	},
	LOGO_ICON: {
		path: IconPath.LOGO_ICON,
		alt: 'Logo',
	},
	USER_ICON: {
		path: IconPath.USER_ICON,
		alt: 'User icon',
	},
	EMAIL_ICON: {
		path: IconPath.EMAIL_ICON,
		alt: 'Email icon',
	},
	PHONE_ICON: {
		path: IconPath.PHONE_ICON,
		alt: 'Phone icon',
	},
	LOADER: {
		path: IconPath.LOADER,
		alt: 'Loader',
	},
	UPLOAD_ICON: {
		path: IconPath.UPLOAD_ICON,
		alt: 'Upload static icon',
	},
	UPLOAD_GIF: {
		path: IconPath.UPLOAD_GIF,
		alt: 'Upload animation',
	},
	CALENDAR_ICON: {
		path: IconPath.CALENDAR_ICON,
		alt: 'Calendar',
	},
	CLOSE_ICON: {
		path: IconPath.CLOSE_ICON,
		alt: 'Close',
	},
	SCHEDULED_ICON: {
		path: IconPath.SCHEDULED_ICON,
		alt: 'Scheduled Appointment',
	},
	PENDING_ICON: {
		path: IconPath.PENDING_ICON,
		alt: 'Pending Appointment',
	},
	CANCELLED_ICON: {
		path: IconPath.CANCELLED_ICON,
		alt: 'Cancelled Appointment',
	},
}

// Kinde of images
export const Images = {
	HOME_PAGE_IMAGE: {
		path: ImagePath.HOME_PAGE_IMAGE,
		alt: 'Home page image',
	},
	REGISTER_PAGE_IMAGE: {
		path: ImagePath.REGISTER_PAGE_IMAGE,
		alt: 'Registration page image',
	},
	NEW_APPOINTMENT_PAGE_IMAGE: {
		path: ImagePath.NEW_APPOINTMENT_PAGE_IMAGE,
		alt: 'New appointment page image',
	},
}
