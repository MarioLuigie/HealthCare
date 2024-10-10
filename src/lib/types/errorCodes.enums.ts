export enum AuthErrorCodes {
  CODE_401 = '401', // Unauthorized
  CODE_403 = '403', // Forbidden
  CODE_407 = '407', // Proxy Authentication Required
}

export enum BadRequestErrorCodes {
  CODE_400 = '400', // Bad Request
  CODE_405 = '405', // Method Not Allowed
  CODE_406 = '406', // Not Acceptable
  CODE_411 = '411', // Length Required
  CODE_414 = '414', // URI Too Long
  CODE_415 = '415', // Unsupported Media Type
}

export enum ResourceErrorCodes {
  CODE_404 = '404', // Not Found
  CODE_410 = '410', // Gone
}

export enum LimitationErrorCodes {
  CODE_408 = '408', // Request Timeout
  CODE_413 = '413', // Payload Too Large
  CODE_416 = '416', // Range Not Satisfiable
  CODE_429 = '429', // Too Many Requests
}

export enum ProtocolErrorCodes {
  CODE_412 = '412', // Precondition Failed
  CODE_417 = '417', // Expectation Failed
  CODE_421 = '421', // Misdirected Request
  CODE_422 = '422', // Unprocessable Entity
  CODE_423 = '423', // Locked
  CODE_424 = '424', // Failed Dependency
  CODE_425 = '425', // Too Early
  CODE_426 = '426', // Upgrade Required
  CODE_428 = '428', // Precondition Required
  CODE_431 = '431', // Request Header Fields Too Large
  CODE_451 = '451', // Unavailable For Legal Reasons
}

export enum InternalServerErrorCodes {
  CODE_500 = '500', // Internal Server Error
  CODE_501 = '501', // Not Implemented
  CODE_502 = '502', // Bad Gateway
  CODE_503 = '503', // Service Unavailable
  CODE_504 = '504', // Gateway Timeout
  CODE_505 = '505', // HTTP Version Not Supported
}

export enum ResourceManagementErrorCodes {
  CODE_507 = '507', // Insufficient Storage
  CODE_508 = '508', // Loop Detected
  CODE_510 = '510', // Not Extended
  CODE_511 = '511', // Network Authentication Required
}

