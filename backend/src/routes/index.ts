import {Router} from "express";
import Post from "./items/Post";
import User from "./users/User";

const router = Router();

router.use('/posts', Post);
router.use('/profiles', User);
export default router;
