import { Gender, Status } from '@/lib/types/enums'
import { PatientFormValues } from '@/lib/types/zod'
import { ImagePath, IconPath, DoctorPath, VideoPath } from '@/lib/constants/paths'

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
	LOGO_FULL_ICON: {
		path: IconPath.LOGO_FULL,
		alt: 'Logo',
	},
	LOGO_ICON: {
		path: IconPath.LOGO,
		alt: 'Logo',
	},
	USER_ICON: {
		path: IconPath.USER,
		alt: 'User icon',
	},
	EMAIL_ICON: {
		path: IconPath.EMAIL,
		alt: 'Email icon',
	},
	PHONE_ICON: {
		path: IconPath.PHONE,
		alt: 'Phone icon',
	},
	LOADER_ICON: {
		path: IconPath.LOADER,
		alt: 'Loader',
	},
	UPLOAD_ICON: {
		path: IconPath.UPLOAD,
		alt: 'Upload static icon',
	},
	UPLOAD_ANIME_ICON: {
		path: IconPath.UPLOAD_ANIM,
		alt: 'Upload animation',
	},
	CALENDAR_ICON: {
		path: IconPath.CALENDAR,
		alt: 'Calendar',
	},
	CLOSE_ICON: {
		path: IconPath.CLOSE,
		alt: 'Close',
	},
	SCHEDULED_ICON: {
		path: IconPath.SCHEDULED,
		alt: 'Scheduled Appointment',
	},
	PENDING_ICON: {
		path: IconPath.PENDING,
		alt: 'Pending Appointment',
	},
	CANCELLED_ICON: {
		path: IconPath.CANCELLED,
		alt: 'Cancelled Appointment',
	},
	FINISHED_ICON: {
		path: IconPath.FINISHED,
		alt: 'Finished Appointment',
	},
	PASSWORD_ICON: {
		path: IconPath.PASSWORD,
		alt: 'Password',
	},
}

// Kinde of images
export const Images = {
	SIGN_UP_PAGE_IMAGE: {
		path: ImagePath.SIGN_UP,
		alt: 'Sign Up page',
	},
	SIGN_IN_PAGE_IMAGE: {
		path: ImagePath.SIGN_IN,
		alt: 'Sign In page',
	},
	REGISTER_PAGE_IMAGE: {
		path: ImagePath.REGISTER_PAGE,
		alt: 'Registration page',
	},
	NEW_APPOINTMENT_PAGE_IMAGE: {
		path: ImagePath.NEW_APPOINTMENT_PAGE,
		alt: 'New appointment page',
	},
	USER_NOT_VERIFIED_IMAGE: {
		path: ImagePath.USER_NOT_VERIFIED,
		alt: 'User not verified',
	},
	PATIENT_CREATE_IMAGE: {
		path: ImagePath.PATIENT_CREATE,
		alt: 'Create patient',
	},
	APPOINTMENT_CREATE_IMAGE: {
		path: ImagePath.APPOINTMENT_CREATE,
		alt: 'Create appointment',
	},
}

// Kinde of videos
export const Videos = {
	HOME_PAGE_VIDEO: {
		path: VideoPath.HOME_PAGE,
	},
}

export const StatusConfig = {
	[Status.SCHEDULED]: {
		bgImage: 'bg-scheduled',// tailwind backgroundImage class
		bgColor: "bg-green-600",
		textColor: "text-green-500",
		icon: IconPath.SCHEDULED,
		title: 'Schedule',
	},
	[Status.PENDING]: {
		bgImage: 'bg-pending',
		bgColor: "bg-blue-600",
		textColor: "text-blue-500",
		icon: IconPath.PENDING,
		title: 'Pend',
	},
	[Status.CANCELLED]: {
		bgImage: 'bg-cancelled',
		bgColor: "bg-red-600",
		textColor: "text-red-500",
		icon: IconPath.CANCELLED,
		title: 'Cancel',
	},
	[Status.FINISHED]: {
		bgImage: 'bg-finished',
		bgColor: "bg-zinc-600",
		textColor: "text-zinc-300",
		icon: IconPath.FINISHED,
		title: 'Finish',
	},
}




