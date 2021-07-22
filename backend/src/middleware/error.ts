import {NextFunction, Request, Response} from "express";
import {StatusCodes} from "http-status-codes";
import {ExtendedError} from "../public/models/ExtendedError";

const {INTERNAL_SERVER_ERROR} = StatusCodes;

export const errorHandler = (error: ExtendedError, req: Request, res: Response, next: NextFunction) => {
    const status = error.statusCode || INTERNAL_SERVER_ERROR;

    const errorMessage = error.message;
    const errObj = {
        success: false,
        // message: errorMessage,
        // message: errorMessage,
        errors: [errorMessage]
    }

    if (error.data) {
        errObj.errors = errObj.errors.concat(error.data);
    }

    return res.status(status).send(errObj);
}