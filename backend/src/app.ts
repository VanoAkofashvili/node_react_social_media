import "./env";
import express, {Application, Request, Response, NextFunction} from "express";

import morgan from "morgan";

import cors from "cors";

const app: Application = express();

const add = (a: number, b: number): number => a + b;

app.use(cors());
app.use(morgan('tiny'));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    console.log(add(5, 5));
    res.send('Hello');
})

app.listen(3001, () => {
    console.log('Server running...');
})