import express, {NextFunction, Request, Response} from "express";
import asyncHandler from "express-async-handler";
import {body, validationResult} from "express-validator";
import {userService} from "../../service/users/User";
import {StatusCodes} from "http-status-codes";
import {User} from "../../public/models/user/User";
import validateFields from "../../middleware/validateSignup";

const bcrypt = require('bcryptjs');

const {OK} = StatusCodes;

const router = express.Router();

const signUp = async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.');
        // @ts-ignore
        error.data = errors.array();
        return next(error);
    }
    const {firstName, lastName, email, age, dateOfBirth, sex, password} = req.body;

    bcrypt.hash(password, 12)
        .then((hashedPassword: string) => {
            const userInstance = new User(firstName, lastName, email, hashedPassword, age, dateOfBirth, sex);
            return userService.createNewUser(userInstance);
        }).then((createdUser: any) => {
        console.log(createdUser, 'createdUser');
    })
        .catch((err: any) => {
            console.log('err in bcrypt', err);
        })

    res.status(OK).json({
        message: 'account created'
    })
}

router.post('/signup', validateFields, asyncHandler(signUp));

export default router;

