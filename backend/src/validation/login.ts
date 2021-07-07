import {body} from "express-validator";

export const validateLogin = [
    body('email')
        .isEmail()
        .withMessage('Please enter a valid email.')
        .normalizeEmail(),
    body('password')
        .trim()
        .isLength({min: 8}),
]
