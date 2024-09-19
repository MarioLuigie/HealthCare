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
