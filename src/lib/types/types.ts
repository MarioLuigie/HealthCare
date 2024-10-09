import { Appointment } from "@/lib/types/appwrite.types"

// Uploaded files
export interface UploadedFileBasicStructure {
	url: string | null
	storageId: string | null
}

// Api Results
export interface IResult<T> {
	success: boolean
	data?: T
	error?: { [key: string]: string | string[] }
}

export interface IDataResult<T> {
	success: boolean
	data: T
	error?: { [key: string]: string }
}

export interface InitialCounts {
	scheduledCount: number 
	pendingCount: number 
	cancelledCount: number
	finishedCount: number 
}

export interface AppointmentsOrderedByStatus extends InitialCounts {
	totalCount: number | null
	documents: Appointment[]
}