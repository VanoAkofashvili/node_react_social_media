import {NextFunction, Request, Response} from "express";
import fileTypes from "../constants/fileTypes";
import {BAD_REQUEST, INTERNAL_SERVER_ERROR} from "http-status-codes";

export function checkFileType(req: Request, res: Response, next: NextFunction) {
    try {
        const files = req.files || [req.file];
        let validFiles = true;
        // @ts-ignore
        for (let file of files) {
            if (!fileTypes.imageTypes.includes(file.mimetype)) {
                validFiles = false;
                break;
            }
        }

        if (!validFiles) {
            return res.status(BAD_REQUEST).json({
                code: BAD_REQUEST,
                success: false,
                message: 'invalid-file-type'
            });
        }

        next();
    } catch (err) {
        return res.status(INTERNAL_SERVER_ERROR).json({code: INTERNAL_SERVER_ERROR, success: false, message: err});
    }

}