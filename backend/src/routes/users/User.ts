import {Router, Response, NextFunction} from "express";
import asyncHandler from "express-async-handler";
import {RequestUser} from "../../public/models/user/User";

const isAuth = require('../../middleware/isAuth');

const router = Router();

const follow = async (req: RequestUser, res: Response, next: NextFunction) => {
    res.json({
        message: 'follow endpoint'
    })
}

const unfollow = async (req: RequestUser, res: Response, next: NextFunction) => {
    res.json({
        message: 'unfollow endpoint'
    })
}

const followers = async (req: RequestUser, res: Response, next: NextFunction) => {
    res.json({
        message: 'get followers'
    })
}

const following = async (req: RequestUser, res: Response, next: NextFunction) => {
    res.json({
        message: 'get followings'
    })
}

router.post('/:username/follow', isAuth, asyncHandler(follow));
router.post('/:username/unfollow', isAuth, asyncHandler(unfollow));
router.get('/followers', isAuth, asyncHandler(followers));
router.get('/following', isAuth, asyncHandler(following))

export default router;