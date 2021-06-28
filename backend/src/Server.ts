import express, {Application} from "express";

import morgan from "morgan";

import cors from "cors";
import bodyParser from "body-parser";
import BaseRouter from "./routes";

const app: Application = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());


app.use('/api', BaseRouter);

export default app;