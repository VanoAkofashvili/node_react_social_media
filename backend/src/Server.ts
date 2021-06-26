import express, {Application, Request, Response, NextFunction} from "express";

import morgan from "morgan";

import cors from "cors";

const app: Application = express();

app.use(cors());
app.use(morgan('tiny'));

app.get('/', (req, res, next) => {
    res.json({
        message: 'success'
    })
})

export default app;