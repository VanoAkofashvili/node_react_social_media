import express, {NextFunction, Request, Response} from "express";
import asyncHandler from "express-async-handler";
import {StatusCodes} from "http-status-codes";
import {authService} from "../../service/auth/Auth";
import {validateLogin, validateSignUp} from "../../validation";
import checkValidationErrors from "../../middleware/checkValidationErrors";

const {OK} = StatusCodes;

const router = express.Router();


const signUp = async (req: Request, res: Response, next: NextFunction) => {
    const {firstName, lastName, email, dateOfBirth, sex, password} = req.body;
    let response = await authService.signUp(firstName, lastName, email, dateOfBirth, sex, password);
    res.status(response.code).json(response);
}

const login = async (req: Request, res: Response, next: NextFunction) => {
    const email = req.body.email;
    const password = req.body.password;
    const response = await authService.login(email, password);
    res.status(OK).json(response);

}

router.post('/signup', validateSignUp, checkValidationErrors, asyncHandler(signUp));
router.post('/login', validateLogin, checkValidationErrors, asyncHandler(login))

export default router;

