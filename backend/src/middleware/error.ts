import {NextFunction, Request, Response} from "express";
import {INTERNAL_SERVER_ERROR} from "http-status-codes";

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    const status = INTERNAL_SERVER_ERROR;
    const errorMessage = error.message;
    return res.status(status).send({success: false, message: errorMessage});
}