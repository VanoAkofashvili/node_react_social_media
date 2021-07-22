import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";
import {ExtendedError} from "../public/models/ExtendedError";
import {StatusCodes} from "http-status-codes";

const {UNPROCESSABLE_ENTITY} = StatusCodes;

export default (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    const modifiedErrors = errors.array().map(error => {
        return error.msg
    })

    console.log(errors.array())
    if (!errors.isEmpty()) {
        const error = new ExtendedError(UNPROCESSABLE_ENTITY, 'Validation failed.', modifiedErrors);
        return next(error);
    }
    next();
}