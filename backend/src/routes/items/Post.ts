import {Router, Request, Response} from "express";
import asyncHandler from "express-async-handler";
import {BAD_REQUEST} from "http-status-codes";
import {plainToClass} from "class-transformer";

const check = require('check-types');
import {postService} from "../../service/items/Post";
import {checkFileType} from "../../middleware/fileType";
import multerPhoto from "../../shared/MulterPhoto";
import {validateNewPost} from "../../validation";
import checkValidationErrors from "../../middleware/checkValidationErrors";
import {RequestUser} from "../../public/models/user/User";
import {Post} from "../../public/models/items/Post";

const isAuth = require('../../middleware/isAuth');
const router = Router();

const getAllPosts = async (req: Request, res: Response) => {
    const response = await postService.getAllPosts();
    return res.status(response.code).json(response);
}

const getSinglePost = async (req: Request, res: Response) => {
    // Get the post id
    const {id} = req.params;

    if (check.undefined(id) || !check.integer(id)) {
        return res.status(BAD_REQUEST).json({
            code: BAD_REQUEST,
            success: false,
            message: 'bad params'
        })
    }

    const response = await postService.getPostById(Number(id));
    res.send({
        msg: true
    })
}

const createNewPost = async (req: RequestUser, res: Response) => {
    const {content} = req.body;
    const userId = req.userId;
    console.log(req.files, 'FILES');
    // @ts-ignore
    const imgUrls = req.files.map(img => {
        return {
            path: img.path
        }
    });

    const post = plainToClass(Post, {
        content: content,
        userId: userId,
        images: imgUrls,
    }, {excludeExtraneousValues: true});

    const response = await postService.createNewPost(post);


    return res.status(response.code).json(response);

    // const images = plainToClass(Photo, req.files as Photo[], {excludeExtraneousValues: true});
    // const response = await postService.createNewPost(newPost, images);
    // res.status(response.code).json(response);
}

router.get('/all', asyncHandler(getAllPosts));
router.get('/:id', asyncHandler(getSinglePost));
router.post('/add-new-post', isAuth, multerPhoto().any(), checkFileType, validateNewPost, checkValidationErrors, asyncHandler(createNewPost));
export default router;