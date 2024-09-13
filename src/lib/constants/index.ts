import { Gender } from '@/lib/types/enums'
import { PatientFormValues } from '@/lib/types/zod'
import { ImagePath, IconPath, DoctorPath } from '@/lib/constants/paths'

// PatientForm default data
export const PatientFormDefaultData: PatientFormValues = {
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
	identificationDocuments: [],
	treatmentConsent: false,
	disclosureConsent: false,
	privacyConsent: false,
}

// AppointmentForm default datas
export const CreateAppointmentFormDefaultData = {
	primaryPhysician: '',
	schedule: new Date(),
	reason: '',
	note: '',
	cancellationReason: '',
}

export const CancelAppointmentFormDefaultData = {
	primaryPhysician: '',
	schedule: new Date(),
	reason: '',
	note: '',
	cancellationReason: '',
}

export const ScheduleAppointmentFormDefaultData = {
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


