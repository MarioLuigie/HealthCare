export enum Gender {
	MALE = 'Male',
	FEMALE = 'Female',
	OTHER = 'Other',
}

export enum Status {
	PENDING = 'Pending',
	CANCELLED = 'Cancelled',
	SCHEDULED = 'Scheduled',
	FINISHED = 'Finished',
}

export enum FormFieldType {
	INPUT = 'input',
	TEXTAREA = 'textarea',
	SELECT = 'select',
	PHONE_INPUT = 'phoneInput',
	CHECKBOX = 'checkbox',
	DATE_PICKER = 'datePicker',
	SKELETON = 'skeleton',
}

export enum ActionTypes {
	CREATE = 'create',
	SCHEDULE = 'schedule',
	CANCEL = 'cancel',
}

export enum SearchParamsString {
	TRUE = 'true',
	FALSE = 'false',
}

export enum Roles {
	DOCTOR = 'doctor',
	PATIENT = 'patient',
	ADMIN = 'admin',
}

export enum TableCells {
	APPOINTMENT_STATUS = 'status',
	PATIENT_NAME = 'patient.name',
	PATIENT_EMAIL = 'patient.email',
	PATIENT_PHONE = 'patient.phone',
	APPOINTMENT_REASON = 'reason',
	APPOINTMENT_PRIMARY_PHYSICIAN = 'primaryPhysician',
	APPOINTMENT_SCHEDULE = 'schedule',
}

export enum TableColumns {
	STATUS = 'Status',
	NAME = 'Name',
	EMAIL = 'Email',
	PHONE = 'Phone',
	PRIMARY_PHYSICIAN = 'Primary Physician',
	PATIENT = 'Patient',
	REASON = 'Reason',
	SCHEDULE = 'Schedule',
}