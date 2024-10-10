// lib
import {
	AuthErrorCodes,
	BadRequestErrorCodes,
	ResourceErrorCodes,
	LimitationErrorCodes,
	ProtocolErrorCodes,
	InternalServerErrorCodes,
	ResourceManagementErrorCodes,
} from '@/lib/types/errorCodes.enums'
import {
	BadRequestErrors,
	AuthErrors,
	ResourceErrors,
	LimitationErrors,
	ProtocolErrors,
	InternalServerErrors,
	ResourceManagementErrors,
} from '@/lib/constants/errors'
import { getFirstDigit } from '@/lib/utils'

export function getClientErrorByCode(errorCode: number) {
	switch (errorCode) {
		// Auth error
		case AuthErrorCodes.CODE_401:
			return AuthErrors[AuthErrorCodes.CODE_401].message
		case AuthErrorCodes.CODE_403:
			return AuthErrors[AuthErrorCodes.CODE_403].message
		case AuthErrorCodes.CODE_407:
			return AuthErrors[AuthErrorCodes.CODE_407].message
		// Bad request error
		case BadRequestErrorCodes.CODE_400:
			return BadRequestErrors[BadRequestErrorCodes.CODE_400].message
		case BadRequestErrorCodes.CODE_405:
			return BadRequestErrors[BadRequestErrorCodes.CODE_405].message
		case BadRequestErrorCodes.CODE_406:
			return BadRequestErrors[BadRequestErrorCodes.CODE_406].message
		case BadRequestErrorCodes.CODE_409:
			return BadRequestErrors[BadRequestErrorCodes.CODE_409].message
		case BadRequestErrorCodes.CODE_411:
			return BadRequestErrors[BadRequestErrorCodes.CODE_411].message
		case BadRequestErrorCodes.CODE_414:
			return BadRequestErrors[BadRequestErrorCodes.CODE_414].message
		case BadRequestErrorCodes.CODE_415:
			return BadRequestErrors[BadRequestErrorCodes.CODE_415].message
		// Resource error
		case ResourceErrorCodes.CODE_404:
			return ResourceErrors[ResourceErrorCodes.CODE_404].message
		case ResourceErrorCodes.CODE_410:
			return ResourceErrors[ResourceErrorCodes.CODE_410].message
		// Limitation error
		case LimitationErrorCodes.CODE_408:
			return LimitationErrors[LimitationErrorCodes.CODE_408].message
		case LimitationErrorCodes.CODE_413:
			return LimitationErrors[LimitationErrorCodes.CODE_413].message
		case LimitationErrorCodes.CODE_416:
			return LimitationErrors[LimitationErrorCodes.CODE_416].message
		case LimitationErrorCodes.CODE_429:
			return LimitationErrors[LimitationErrorCodes.CODE_429].message
		// Protocol error
		case ProtocolErrorCodes.CODE_412:
			return ProtocolErrors[ProtocolErrorCodes.CODE_412].message
		case ProtocolErrorCodes.CODE_417:
			return ProtocolErrors[ProtocolErrorCodes.CODE_417].message
		case ProtocolErrorCodes.CODE_421:
			return ProtocolErrors[ProtocolErrorCodes.CODE_421].message
		case ProtocolErrorCodes.CODE_422:
			return ProtocolErrors[ProtocolErrorCodes.CODE_422].message
		case ProtocolErrorCodes.CODE_423:
			return ProtocolErrors[ProtocolErrorCodes.CODE_423].message
		case ProtocolErrorCodes.CODE_424:
			return ProtocolErrors[ProtocolErrorCodes.CODE_424].message
		case ProtocolErrorCodes.CODE_425:
			return ProtocolErrors[ProtocolErrorCodes.CODE_425].message
		case ProtocolErrorCodes.CODE_426:
			return ProtocolErrors[ProtocolErrorCodes.CODE_426].message
		case ProtocolErrorCodes.CODE_428:
			return ProtocolErrors[ProtocolErrorCodes.CODE_428].message
		case ProtocolErrorCodes.CODE_431:
			return ProtocolErrors[ProtocolErrorCodes.CODE_431].message
		case ProtocolErrorCodes.CODE_451:
			return ProtocolErrors[ProtocolErrorCodes.CODE_451].message
		default:
			return 'An error occured on client side.'
	}
}

export function getServerErrorByCode(errorCode: number) {
	switch (errorCode) {
		// Internal server error
		case InternalServerErrorCodes.CODE_500:
			return InternalServerErrors[InternalServerErrorCodes.CODE_500].message
		case InternalServerErrorCodes.CODE_501:
			return InternalServerErrors[InternalServerErrorCodes.CODE_501].message
		case InternalServerErrorCodes.CODE_502:
			return InternalServerErrors[InternalServerErrorCodes.CODE_502].message
		case InternalServerErrorCodes.CODE_503:
			return InternalServerErrors[InternalServerErrorCodes.CODE_503].message
		case InternalServerErrorCodes.CODE_504:
			return InternalServerErrors[InternalServerErrorCodes.CODE_504].message
		case InternalServerErrorCodes.CODE_505:
			return InternalServerErrors[InternalServerErrorCodes.CODE_505].message
		// Rosource Managment error
		case ResourceManagementErrorCodes.CODE_507:
			return ResourceManagementErrors[ResourceManagementErrorCodes.CODE_507]
				.message
		case ResourceManagementErrorCodes.CODE_508:
			return ResourceManagementErrors[ResourceManagementErrorCodes.CODE_508]
				.message
		case ResourceManagementErrorCodes.CODE_510:
			return ResourceManagementErrors[ResourceManagementErrorCodes.CODE_510]
				.message
		case ResourceManagementErrorCodes.CODE_511:
			return ResourceManagementErrors[ResourceManagementErrorCodes.CODE_511]
				.message
		default:
			return 'An error occured on server side.'
	}
}

export function getErrorByCode(errorCode: number) {
	const groupNumb = getFirstDigit(errorCode)
	switch (groupNumb) {
		case 4:
			return getClientErrorByCode(errorCode)
		case 5:
			return getServerErrorByCode(errorCode)
		default:
			return 'A general error occured. Try again later.'
	}
}
