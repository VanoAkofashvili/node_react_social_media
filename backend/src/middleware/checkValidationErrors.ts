import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";
import {ExtendedError} from "../public/models/ExtendedError";
import {StatusCodes} from "http-status-codes";

const {UNPROCESSABLE_ENTITY} = StatusCodes;

export default (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new ExtendedError(UNPROCESSABLE_ENTITY, 'Validation failed.', errors.array());
        return next(error);
    }
    next();
}