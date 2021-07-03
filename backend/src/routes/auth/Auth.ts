import express, {NextFunction, Request, Response} from "express";
import asyncHandler from "express-async-handler";
import {validationResult} from "express-validator";
import {userService} from "../../service/users/User";
import {StatusCodes} from "http-status-codes";
import {User} from "../../public/models/user/User";
import validateFields from "../../middleware/validateSignup";
import {ErrorResponse} from "../../public/responses/BaseResponse";

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const {OK, CREATED, UNAUTHORIZED} = StatusCodes;

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

    bcrypt
        .hash(password, 12)
        .then((hashedPassword: string) => {
            const userInstance = new User(firstName, lastName, email, hashedPassword, age, dateOfBirth, sex);
            return userService.createNewUser(userInstance);
        })
        .then(({data: createdUser}: any) => {
            console.log('USEEEER', createdUser);
            return res.status(CREATED).json({code: CREATED, success: true, userId: createdUser.id});
        })
        .catch((err: any) => {
            console.log('err in bcrypt', err);
        })
}

const login = async (req: Request, res: Response, next: NextFunction) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email)
    const {data: user} = await userService.findUserByEmail(email);

    // No user is found
    if (!user) {
        throw new Error('A user with this email could not be found.');
    }

    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual)
        throw new Error('Wrong password');
    const {password: pass, ...userResponse} = user;
    console.log(userResponse, 'USER_RESPONSE');
    const token = jwt.sign({
        ...userResponse
    }, 'secret', {
        expiresIn: '1h'
    })


    res.status(OK).json({
        token: token,
        userId: user.id
    });

}

router.post('/signup', validateFields, asyncHandler(signUp));
router.post('/login', asyncHandler(login))

export default router;

