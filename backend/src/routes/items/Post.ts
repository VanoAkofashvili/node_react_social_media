import {Router, Request, Response, NextFunction} from "express";
import asyncHandler from "express-async-handler";
import {StatusCodes} from "http-status-codes";
import {plainToClass} from "class-transformer";

const check = require('check-types');
import {postService} from "../../service/items/Post";
import {checkFileType} from "../../middleware/fileType";
import multerPhoto from "../../shared/MulterPhoto";
import {validateNewPost} from "../../validation";
import checkValidationErrors from "../../middleware/checkValidationErrors";
import {RequestUser} from "../../public/models/user/User";
import {Post} from "../../public/models/items/Post";
import {param} from "express-validator";

const isAuth = require('../../middleware/isAuth');
const router = Router();

const {BAD_REQUEST} = StatusCodes;

const getAllPosts = async (req: Request, res: Response) => {
    const response = await postService.getAllPosts();
    return res.status(response.code).json(response);
}

const getSinglePost = async (req: Request, res: Response) => {
    // Get the post id
    const {id} = req.params;
    console.log(id, 'id');
    if (check.undefined(id) || !check.integer(id)) {
        return res.status(BAD_REQUEST).json({
            code: BAD_REQUEST,
            success: false,
            message: 'bad params'
        })
    }
    const response = await postService.getPostById(+id);
    console.log(response);
    res.status(response.code).json(response)
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
}

const deletePost = async (req: RequestUser, res: Response, next: NextFunction) => {
    const postId = req.params.postId;
    const userId = req.userId!;
    const response = await postService.deletePostById(+postId, +userId);
    return res.status(response.code).json(response);
}

router.get('/all', isAuth, asyncHandler(getAllPosts));
router.get('/:id', isAuth, [
    param('id')
        .exists()
        .toInt()
        .custom((value, {req}) => {
            if (!value) {
                return Promise.reject('id must be a number')
            }
            return true;
        }),
    checkValidationErrors
], asyncHandler(getSinglePost));
router.post('/add-new-post', isAuth, multerPhoto().any(), checkFileType, validateNewPost, checkValidationErrors, asyncHandler(createNewPost));
router.delete('/del/:postId', isAuth, asyncHandler(deletePost));
export default router;