import {body} from "express-validator";
import {userService} from "../service/users/User";

export const validateSignUp = [
    body('email')
        .isEmail()
        .withMessage('Please enter a valid email.')
        .custom((value, {req}) => {
            return userService.findUserByEmail(value).then(({data: user}) => {
                // if user exists reject
                if (user) {
                    return Promise.reject('E-Mail address already exists');
                }
            })
        })
        .normalizeEmail(),
    body('password')
        .trim()
        .isLength({min: 8}),
    body('firstName')
        .trim()
        .not()
        .isEmpty(),
]
