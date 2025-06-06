// Creating a class function to handle api errors throughout the backend

class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something went wrong",
        errors =[],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.success = false
        this.error = errors

        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export default ApiError