// Uploaded files
export interface UploadedFileBasicStructure {
	url: string | null
	id: string | null
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