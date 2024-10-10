import {
	BadRequestErrorCodes,
	AuthErrorCodes,
	ResourceErrorCodes,
	LimitationErrorCodes,
	ProtocolErrorCodes,
	InternalServerErrorCodes,
	ResourceManagementErrorCodes,
} from '@/lib/types/errorCodes.enums'

// Unauthorized
export const AuthErrors = {
	[AuthErrorCodes.CODE_401]: {
		message:
			'Unauthorized: Authentication is required and has failed or has not been provided.',
	},
	[AuthErrorCodes.CODE_403]: {
		message:
			'Forbidden: The server understood the request but refuses to authorize it.',
	},
	[AuthErrorCodes.CODE_407]: {
		message:
			'Proxy Authentication Required: The client must first authenticate itself with the proxy.',
	},
}

// Bad requests
export const BadRequestErrors = {
	[BadRequestErrorCodes.CODE_400]: {
		message:
			'Bad Request: The server could not understand the request due to invalid syntax.',
	},
	[BadRequestErrorCodes.CODE_405]: {
		message:
			'Method Not Allowed: The request method is known by the server but is not supported by the resource.',
	},
	[BadRequestErrorCodes.CODE_406]: {
		message:
			'Not Acceptable: The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.',
	},
	[BadRequestErrorCodes.CODE_411]: {
		message:
			'Length Required: The server refuses to accept the request without a defined Content-Length.',
	},
	[BadRequestErrorCodes.CODE_414]: {
		message:
			'URI Too Long: The URI provided was too long for the server to process.',
	},
	[BadRequestErrorCodes.CODE_415]: {
		message:
			'Unsupported Media Type: The media format of the requested data is not supported by the server.',
	},
}

// Resource 
export const ResourceErrors = {
	[ResourceErrorCodes.CODE_404]: {
		message:
			'Not Found: The requested resource could not be found on the server.',
	},
	[ResourceErrorCodes.CODE_410]: {
		message:
			'Gone: The resource requested is no longer available and will not be available again.',
	},
}

// Limits
export const LimitationErrors = {
	[LimitationErrorCodes.CODE_408]: {
		message: 'Request Timeout: The server timed out waiting for the request.',
	},
	[LimitationErrorCodes.CODE_413]: {
		message:
			'Payload Too Large: The request is larger than the server is willing or able to process.',
	},
	[LimitationErrorCodes.CODE_416]: {
		message:
			'Range Not Satisfiable: The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.',
	},
	[LimitationErrorCodes.CODE_429]: {
		message:
			'Too Many Requests: The user has sent too many requests in a given amount of time ("rate limiting").',
	},
}

// Protocols
export const ProtocolErrors = {
	[ProtocolErrorCodes.CODE_412]: {
		message:
			'Precondition Failed: The server does not meet one of the preconditions that the requester put on the request.',
	},
	[ProtocolErrorCodes.CODE_417]: {
		message:
			'Expectation Failed: The server cannot meet the requirements of the Expect request-header field.',
	},
	[ProtocolErrorCodes.CODE_421]: {
		message:
			'Misdirected Request: The request was directed at a server that is not able to produce a response.',
	},
	[ProtocolErrorCodes.CODE_422]: {
		message:
			'Unprocessable Entity: The request was well-formed but was unable to be followed due to semantic errors.',
	},
	[ProtocolErrorCodes.CODE_423]: {
		message: 'Locked: The resource that is being accessed is locked.',
	},
	[ProtocolErrorCodes.CODE_424]: {
		message:
			'Failed Dependency: The request failed due to failure of a previous request.',
	},
	[ProtocolErrorCodes.CODE_425]: {
		message:
			'Too Early: The server is unwilling to risk processing a request that might be replayed.',
	},
	[ProtocolErrorCodes.CODE_426]: {
		message:
			'Upgrade Required: The client should switch to a different protocol such as TLS/1.0.',
	},
	[ProtocolErrorCodes.CODE_428]: {
		message:
			'Precondition Required: The origin server requires the request to be conditional.',
	},
	[ProtocolErrorCodes.CODE_431]: {
		message:
			'Request Header Fields Too Large: The server is unwilling to process the request because its header fields are too large.',
	},
	[ProtocolErrorCodes.CODE_451]: {
		message:
			'Unavailable For Legal Reasons: The resource requested is unavailable for legal reasons.',
	},
}

// Internal server
export const InternalServerErrors = {
	[InternalServerErrorCodes.CODE_500]: {
		message:
			'Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.',
	},
	[InternalServerErrorCodes.CODE_501]: {
		message:
			'Not Implemented: The server does not support the functionality required to fulfill the request.',
	},
	[InternalServerErrorCodes.CODE_502]: {
		message:
			'Bad Gateway: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.',
	},
	[InternalServerErrorCodes.CODE_503]: {
		message:
			'Service Unavailable: The server is currently unable to handle the request due to temporary overloading or maintenance.',
	},
	[InternalServerErrorCodes.CODE_504]: {
		message:
			'Gateway Timeout: The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.',
	},
	[InternalServerErrorCodes.CODE_505]: {
		message:
			'HTTP Version Not Supported: The server does not support the HTTP protocol version used in the request.',
	},
}

// Resource Management
export const ResourceManagementErrors = {
	[ResourceManagementErrorCodes.CODE_507]: {
		message:
			'Insufficient Storage: The server is unable to store the representation needed to complete the request.',
	},
	[ResourceManagementErrorCodes.CODE_508]: {
		message:
			'Loop Detected: The server detected an infinite loop while processing a request.',
	},
	[ResourceManagementErrorCodes.CODE_510]: {
		message:
			'Not Extended: Further extensions to the request are required for the server to fulfill it.',
	},
	[ResourceManagementErrorCodes.CODE_511]: {
		message:
			'Network Authentication Required: The client needs to authenticate to gain network access.',
	},
}
