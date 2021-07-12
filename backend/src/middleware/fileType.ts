import { NextFunction, Request, Response } from "express";
import fileTypes from "../constants/fileTypes";
import { StatusCodes } from "http-status-codes";

const { BAD_REQUEST, INTERNAL_SERVER_ERROR } = StatusCodes;

export function checkFileType(req: Request, res: Response, next: NextFunction) {
  try {
    const files = req.files || [req.file];

    // @ts-ignore
    if (files.length > 0 && files[0]) {
      // there is files and first file is not undefined (in case of there is no file [undefined] => || [req.file])
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
          message: "invalid-file-type",
        });
      }
    }

    next();
  } catch (err) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      code: INTERNAL_SERVER_ERROR,
      success: false,
      message: err.message,
    });
  }
}
