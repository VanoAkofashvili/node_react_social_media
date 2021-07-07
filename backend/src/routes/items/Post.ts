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
import {param, body} from "express-validator";
import clearImage from "../../shared/ClearImage";

const isAuth = require('../../middleware/isAuth');
const router = Router();

const {BAD_REQUEST, NOT_FOUND} = StatusCodes;


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
            path: img.path.replace('\\', '/')
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

const editPost = async (req: RequestUser, res: Response, next: NextFunction) => {
    const postId = +req.params.postId; // update this post
    const userId = +req.userId!; // post belongs to
    const content = req.body.content; // new content
    const postImages = JSON.parse(req.body.images); // previous images
    // console.log(postImages, 'POST IMAGES');
    let newImages = req.files || []; // new images
    if (newImages.length > 0) {
        //@ts-ignore
        newImages = req.files.map((img) => img.path.replace('\\', '/'));
    }
    // console.log(newImages, 'NEW IMAGES');

    // find difference
    const imgDiff = postImages.filter((img: string) => {
        //@ts-ignore
        return !newImages.includes(img);
    })

    // console.log(imgDiff, 'IMAGE DIFF');

    // delete previous pictures which aren't present in new images
    // imgDiff.forEach((imgPath: string) => {
    //     clearImage(imgPath);
    // })

    const postData = plainToClass(Post, {
        content: content,
        userId: userId,
        images: newImages,
    }, {excludeExtraneousValues: true});

    const response = await postService.editPost(postId, userId, postData);
    return res.status(200).json(response);

}

router.get('/all',
    isAuth,
    asyncHandler(getAllPosts));

router.get('/:id',
    isAuth,
    [
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

router.post('/add-new-post',
    isAuth,
    multerPhoto().any(),
    checkFileType,
    validateNewPost,
    checkValidationErrors,
    asyncHandler(createNewPost));

router.delete('/:postId',
    isAuth,
    asyncHandler(deletePost));

router.put('/:postId',
    isAuth,
    multerPhoto().any(),
    checkFileType,
    [
        body('content')
            .trim(),

    ],
    checkValidationErrors,
    asyncHandler(editPost));

router.post('/test/:postId', asyncHandler(async (req, res, next) => {
    const postId = +req.params.postId;
    await postService.removePostPhotos(postId);
    return res.json({
        message: 'test'
    })
}))

export default router;