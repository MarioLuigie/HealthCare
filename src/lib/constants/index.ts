import { PatientFormData } from "../types/zod"

export const GenderOptions = ['Male', 'Female', 'Other']

export const PatientFormDefaultValues: PatientFormData = {
	name: '',
	email: '',
	phone: '',
	birthDate: new Date('01-01-1900'),
	gender: 'Male' as Gender,
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

export const Doctors = [
	{
		image: '/assets/images/dr-green.png',
		name: 'John Green',
	},
	{
		image: '/assets/images/dr-cameron.png',
		name: 'Leila Cameron',
	},
	{
		image: '/assets/images/dr-livingston.png',
		name: 'David Livingston',
	},
	{
		image: '/assets/images/dr-peter.png',
		name: 'Evan Peter',
	},
	{
		image: '/assets/images/dr-powell.png',
		name: 'Jane Powell',
	},
	{
		image: '/assets/images/dr-remirez.png',
		name: 'Alex Ramirez',
	},
	{
		image: '/assets/images/dr-lee.png',
		name: 'Jasmine Lee',
	},
	{
		image: '/assets/images/dr-cruz.png',
		name: 'Alyana Cruz',
	},
	{
		image: '/assets/images/dr-sharma.png',
		name: 'Hardik Sharma',
	},
]

export const IdentificationTypes = [
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

export const icons = {
	LOGO_FULL: {
		path: '/assets/icons/logo-full.svg',
		alt: 'Logo',
	},
	LOGO_ICON: {
		path: '/assets/icons/logo-icon.svg',
		alt: 'Logo',
	},
	USER_ICON: {
		path: '/assets/icons/user.svg',
		alt: 'User icon',
	},
	EMAIL_ICON: {
		path: '/assets/icons/email.svg',
		alt: 'Email icon',
	},
	PHONE_ICON: {
		path: '/assets/icons/phone.svg',
		alt: 'Phone icon',
	},
	LOADER: {
		path: '/assets/icons/loader.svg',
		alt: 'Loader',
	},
	UPLOAD_ICON: {
		path: '/assets/icons/upload.svg',
		alt: 'Upload',
	},
	UPLOAD_GIF: {
		path: '/assets/gifs/upload.gif',
		alt: 'Upload',
	},
}

export const images = {
	HOME_PAGE_IMAGE: {
		path: '/assets/images/onboarding-img.png',
		alt: 'Home page image',
	},
	REGISTER_PAGE_IMAGE: {
		path: '/assets/images/register-img.jpg',
		alt: 'Registration page image',
	},
	NEW_APPOINTMENT_PAGE_IMAGE: {
		path: '/assets/images/appointment-img.jpg',
		alt: 'New appointment page image',
	},
}

export const routes = {
	ADMIN: {
		path: '/',
	},
}
