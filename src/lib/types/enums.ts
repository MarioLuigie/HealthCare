export enum Gender {
	MALE = 'Male',
	FEMALE = 'Female',
	OTHER = 'Other',
}

export enum Status {
	PENDING = 'pending',
	CANCELLED = 'cancelled',
	SCHEDULED = 'scheduled',
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
