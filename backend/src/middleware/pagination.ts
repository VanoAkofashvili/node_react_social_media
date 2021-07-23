import {NextFunction, Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {ExtendedError} from "../public/models/ExtendedError";

const {BAD_REQUEST, INTERNAL_SERVER_ERROR} = StatusCodes;
const PER_PAGE = 15; // if size is not provided
export function withPagination(req: Request, res: Response, next: NextFunction) {
    try {
        const page = <string>req.query.page || '1';
        const size = <string>req.query.size || String(PER_PAGE);
        if (page && size) {
            const nSize = parseInt(size);
            const nPage = parseInt(page);

            console.log('limit', nSize);
            console.log('offset', getOffset(nPage, nSize));

            if (nPage > 0 && nSize > 0) {
                req.body = {...req.body, offset: getOffset(nPage, nSize), limit: nSize, subQuery: false}
                next();
                return;
            }
        }
        return next(new ExtendedError(BAD_REQUEST, 'page and size are mandatory'));
    } catch (err) {
        return res.status(INTERNAL_SERVER_ERROR).json({code: INTERNAL_SERVER_ERROR, success: false, message: err});
    }
}

const getOffset = (page: number, limit: number) => {
    return (page * limit) - limit;
}
