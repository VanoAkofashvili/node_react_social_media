import {NextFunction, Request, Response} from "express";
import {StatusCodes} from "http-status-codes";

const {INTERNAL_SERVER_ERROR} = StatusCodes;

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    const status = INTERNAL_SERVER_ERROR;
    const errorMessage = error.message;
    const errObj = {
        success: false,
        message: errorMessage,
    }
    if ('data' in error) {
        //@ts-ignore
        errObj.data = error.data;
    }

    return res.status(status).send(errObj);
}