import express, {Application, NextFunction} from "express";

import morgan from "morgan";

import cors from "cors";
import bodyParser from "body-parser";
import BaseRouter from "./routes";
import {INTERNAL_SERVER_ERROR} from "http-status-codes";

const app: Application = express();

app.use(cors());
app.use(morgan('tiny'));
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

export default app;