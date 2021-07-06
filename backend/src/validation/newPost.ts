import {body} from "express-validator";

export const validateNewPost = [
    body('content')
        .not()
        .isEmpty()
        .withMessage('Empty Content'),
]
