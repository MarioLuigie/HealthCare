import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import qs from "query-string"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const deepClone = (value: any) => JSON.parse(JSON.stringify(value))

// Make text shorter
export const truncateText = (text: string | null, end: number) => {
  if (text !== null) {
    return `${text.slice(0, end)}...`
  } else {
    return
  }
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function prepareSearchParam(
  searchParam: string | string[] | undefined
): string {
  if (!searchParam) {
    // throw new Error('Search param is undefined')
    return ""
  }
  return Array.isArray(searchParam) ? searchParam[0] : searchParam
}

export function generateUrl(
  pathSegments: string[],
  queryParams: { [key: string]: string | undefined } = {}
): string {
  // Join the path segments into a single string
  const path = pathSegments.join("/")

  // Generate the full URL with query parameters
  return qs.stringifyUrl({
    url: path,
    query: queryParams,
  })
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file)

// FORMAT DATE TIME
export const formatDateTime = (dateString: Date | string) => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    // weekday: "short", // abbreviated weekday name (e.g., 'Mon')
    month: "short", // abbreviated month name (e.g., 'Oct')
    day: "numeric", // numeric day of the month (e.g., '25')
    year: "numeric", // numeric year (e.g., '2023')
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  }

  const dateDayOptions: Intl.DateTimeFormatOptions = {
    weekday: "short", // abbreviated weekday name (e.g., 'Mon')
    year: "numeric", // numeric year (e.g., '2023')
    month: "2-digit", // abbreviated month name (e.g., 'Oct')
    day: "2-digit", // numeric day of the month (e.g., '25')
  }

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "short", // abbreviated month name (e.g., 'Oct')
    year: "numeric", // numeric year (e.g., '2023')
    day: "numeric", // numeric day of the month (e.g., '25')
  }

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  }

  const formattedDateTime: string = new Date(dateString).toLocaleString(
    "en-US",
    dateTimeOptions
  )

  const formattedDateDay: string = new Date(dateString).toLocaleString(
    "en-US",
    dateDayOptions
  )

  const formattedDate: string = new Date(dateString).toLocaleString(
    "en-US",
    dateOptions
  )

  const formattedTime: string = new Date(dateString).toLocaleString(
    "en-US",
    timeOptions
  )

  return {
    dateTime: formattedDateTime,
    dateDay: formattedDateDay,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  }
}

export const formatDateToYMD = (dateString: Date | string): string => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, "0") // Miesiące są indeksowane od 0
  const day = date.getDate().toString().padStart(2, "0")
  return `${year}-${month}-${day}`
}

export function encryptKey(passkey: string) {
  return btoa(passkey)
}

export function decryptKey(passkey: string) {
  return atob(passkey)
}

export function prepareFormDataFiles(fileUploadData: File[]): FormData {
  const formData = new FormData()

  // Przetwarzanie wszystkich plików z tablicy
  fileUploadData.forEach((file) => {
    // Dodajemy każdy plik do FormData z tym samym kluczem
    const blobFile = new Blob([file], {
      type: file.type,
    })

    // Dodajemy plik do FormData z tym samym kluczem 'files[]'
    formData?.append("files[]", blobFile, file.name)
  })

  return formData
}

export function createSubmitLabel(type: string = "", entity: string): string {
  let submitBtnLabel = `${entity}`

  switch (type) {
    case "cancel":
      submitBtnLabel = `Cancel ${entity}`
      break
    case "schedule":
      submitBtnLabel = `Schedule ${entity}`
      break
    case "create":
      submitBtnLabel = `Create ${entity}`
      break
    case "update":
      submitBtnLabel = `Update ${entity}`
      break
    case "delete":
      submitBtnLabel = `Delete ${entity}`
      break
  }

  return submitBtnLabel
}

// export function prepareFileUploadData(fileUploadData: File[] | undefined) {
// 	let data: FormData | undefined = undefined

// 	if (fileUploadData && fileUploadData.length > 0) {
// 		data = new FormData()

// 		// Przetwarzanie wszystkich plików z tablicy
// 		fileUploadData.forEach((file, index) => {
// 			// Dodajemy każdy plik do FormData
// 			const blobFile = new Blob([file], {
// 				type: file.type,
// 			})

// 			// Dodajemy plik do FormData. Używamy dynamicznych nazw dla plików.
// 			data?.append(`blobFile_${index}`, blobFile)
// 			data?.append(`fileName_${index}`, file.name)
// 		})
// 	}

// 	return data
// }

// OBSŁUGA TYLKO JEDNEGO PLIKU
// export function prepareFileUploadData(fileUploadData: File[] | undefined) {
// 	let data
// 	// extracting files from fileUploadData
// 	if (
// 		fileUploadData &&
// 		fileUploadData.length > 0
// 	) {
// 		// file that can be read by browsers
// 		const blobFile = new Blob([fileUploadData[0]], {
// 			type: fileUploadData[0].type,
// 		})
// 		// file possible to open
// 		data = new FormData()
// 		data.append('blobFile', blobFile)
// 		data.append('fileName', fileUploadData[0].name)
// 	}
// 	return data
// }
