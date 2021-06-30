import express, {Application, NextFunction} from "express";

import morgan from "morgan";
import multer from "multer";
import cors from "cors";
import BaseRouter from "./routes";
import {errorHandler} from "./middleware/error";
import {BAD_REQUEST} from "http-status-codes";

// const md5 = require('md5');

const app: Application = express();

// const fileStorage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'images');
//     },
//     filename: (req, file, cb) => {
//         const d = new Date();
//         const dateFileName = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
//         cb(null, md5(file.originalname) + '-' + dateFileName);
//     }
// });
// //@ts-ignore
// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }

app.use(cors());
app.use(morgan('tiny'));
// app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'))
app.use(express.json());


const models = require('./database/models');
// @ts-ignore
app.use((req: Request, res: Response, next: NextFunction) => {
    models.user.findByPk(1).then((user: any) => {
        if (!user) {
            return models.user.create({
                firstName: 'vaniko',
                lastName: 'akopashvili',
                email: 'vanikoakofa@gmail.com',
                password: 'vano1234'
            })
        }
        return user;
    })
        .then((user: any) => {
            // console.log(user, 'user');
            next();
        })
        .catch((err: any) => {
            console.log(err);
            next();
        })
})

app.use('/api', BaseRouter);

app.use(errorHandler);

// @ts-ignore
app.get('*', (req: Request, res: Response) => {
    // res.sendFile('index.html', {root: viewsDir});
    // @ts-ignore
    res.status(BAD_REQUEST).json({success: false})
});

export default app;