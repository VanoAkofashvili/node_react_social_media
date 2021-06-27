import {Router} from "express";
import Post from "./items/Post";

const router = Router();

router.use('/posts', Post);

export default router;