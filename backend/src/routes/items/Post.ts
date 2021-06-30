import {Router, Request, Response, NextFunction} from "express";
import asyncHandler from "express-async-handler";
import {BAD_REQUEST} from "http-status-codes";
import {plainToClass} from "class-transformer";
import {ItemTypes} from "../../public/models/items/ItemTypes";

const check = require('check-types');
import {Post} from "../../public/models/items/Post";
import {postService} from "../../service/items/Post";

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
    console.log(response);
    res.send({
        msg: true
    })
}

const createNewPost = async (req: Request, res: Response) => {
    const body = req.body;
    const {post, userId} = body;
    const image = req.file;

    if (check.undefined(image) || check.undefined(post) || check.undefined(userId)) {
        return res.status(BAD_REQUEST).json({
            code: BAD_REQUEST,
            success: false,
            message: 'bad params'
        })
    }
    const imageUrl = image?.path;

    const newPost = plainToClass(Post, {
        ...post,
        userId,
        imageUrl: imageUrl,
        itemType: ItemTypes.Post
    } as Post, {excludeExtraneousValues: true});

    const response = await postService.createNewPost(newPost);
    res.status(response.code).json(response);
}

router.get('/all', asyncHandler(getAllPosts));
router.get('/:id', asyncHandler(getSinglePost));

router.post('/add-new-post', asyncHandler(createNewPost));

export default router;