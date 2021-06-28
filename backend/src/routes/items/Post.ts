import {Router, Request, Response} from "express";
import asyncHandler from "express-async-handler";
import {BAD_REQUEST} from "http-status-codes";
import {plainToClass} from "class-transformer";

const check = require('check-types');

import {postService} from "../../service/items/Post";
import {Post} from "../../public/models/items/Post";
import {ItemTypes} from "../../public/models/items/ItemTypes";

const router = Router();

const posts = [
    {
        userId: 1,
        content: 'this is the first post'
    },
    {
        userId: 1,
        content: 'this is the second post'
    },
    {
        userId: 2,
        content: 'this is the third post'
    }
]

const getAllPosts = async (req: Request, res: Response) => {
    res.json(posts);
}

const getSinglePost = async (req: Request, res: Response) => {
    // Get the post id
    const {id} = req.params;
    const response = await postService.getSinglePost(Number(id));
    console.log(response);
    res.send({
        msg: true
    })
}

const createNewPost = async (req: Request, res: Response) => {
    const body = req.body;
    const {post, userId} = body;

    if (check.undefined(post) || check.undefined(userId)) {
        return res.status(BAD_REQUEST).json({
            code: BAD_REQUEST,
            success: false,
            message: 'bad params'
        })
    }

    const newPost = plainToClass(Post, {
        ...post,
        userId,
        itemType: ItemTypes.Post
    } as Post, {excludeExtraneousValues: true});

    const response = await postService.createNewPost(newPost);
    res.status(201).json({
        message: 'post created'
    })
}

router.get('/all', asyncHandler(getAllPosts));
router.get('/:id', asyncHandler(getSinglePost));

router.post('/add-new-post', asyncHandler(createNewPost));

export default router;