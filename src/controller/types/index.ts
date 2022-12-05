/**
 * Basic JSON response for controllers
 */

export type BasicResponse = {
    message: string
}

export type CloseResponse = {
    message: string,
    date: Date
}

/**
 * Error JSON response for controllers
 */
export type ErrorResponse = {
    error: string,
    message: string   
}