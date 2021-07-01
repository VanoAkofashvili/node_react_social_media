import express, {Application, NextFunction} from "express";
import morgan from "morgan";
import cors from "cors";
import BaseRouter from "./routes";
import {errorHandler} from "./middleware/error";
import {BAD_REQUEST} from "http-status-codes";


const app: Application = express();

app.use(cors());
app.use(morgan('tiny'));
// app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'))
app.use(express.json());


app.use('/api', BaseRouter);

app.use(errorHandler);

// @ts-ignore
app.get('*', (req: Request, res: Response) => {
    // @ts-ignore
    res.status(BAD_REQUEST).json({success: false})
});

export default app;