import express, {Application} from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import BaseRouter from "./routes";
import AuthRouter from "./routes/auth/Auth";
import {errorHandler} from "./middleware/error";
import {StatusCodes} from "http-status-codes";

const {BAD_REQUEST} = StatusCodes;
import path from "path";

const app: Application = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, '..', 'images')))

app.use('/auth', AuthRouter);
app.use('/api', BaseRouter);

app.use(errorHandler);

// @ts-ignore
app.get('*', (req: Request, res: Response) => {
    // @ts-ignore
    res.status(BAD_REQUEST).json({success: false})
});

export default app;