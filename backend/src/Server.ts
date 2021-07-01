import express, {Application, NextFunction} from "express";

import morgan from "morgan";
import multer from "multer";
import cors from "cors";
import BaseRouter from "./routes";
import {errorHandler} from "./middleware/error";
import {BAD_REQUEST} from "http-status-codes";

// const md5 = require('md5');

const app: Application = express();



app.use(cors());
app.use(morgan('tiny'));
// app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'))
app.use(express.json());


const models = require('./database/models');
// @ts-ignore
// app.use((req: Request, res: Response, next: NextFunction) => {
//     models.user.findByPk(1).then((user: any) => {
//         console.log('USER', user);
//         if (!user) {
//             return models.user.create({
//                 firstName: 'vaniko',
//                 lastName: 'akopashvili',
//                 email: 'vanikoakofa@gmail.com',
//                 password: 'vano1234',
//                 age: 19,
//                 dateOfBirth: new Date('11-11-2001'),
//                 sex: 1,
//                 profileId: 'asdf',
//             })
//         }
//         return user;
//     })
//         .then((user: any) => {
//             // console.log(user, 'user');
//             next();
//         })
//         .catch((err: any) => {
//             console.log(err);
//             next();
//         })
// })

app.use('/api', BaseRouter);

app.use(errorHandler);

// @ts-ignore
app.get('*', (req: Request, res: Response) => {
    // res.sendFile('index.html', {root: viewsDir});
    // @ts-ignore
    res.status(BAD_REQUEST).json({success: false})
});

export default app;