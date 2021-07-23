import {Router, Request, Response, NextFunction} from "express";
import asyncHandler from "express-async-handler";
import {StatusCodes} from "http-status-codes";
import {plainToClass} from "class-transformer";

const check = require("check-types");
import {postService} from "../../service/items/Post";
import {checkFileType} from "../../middleware/fileType";
import multerPhoto from "../../shared/MulterPhoto";
import {validateNewPost} from "../../validation";
import checkValidationErrors from "../../middleware/checkValidationErrors";
import {RequestUser} from "../../public/models/user/User";
import {Post} from "../../public/models/items/Post";
import {param, body} from "express-validator";
import {IImage} from "../../public/models/photo/Photo";
import {itemService} from "../../service/items/Item";
import {withPagination} from "../../middleware/pagination";
import {Paging} from "../../public/models/general/Paging";

const isAuth = require("../../middleware/isAuth");
const router = Router();


const getAllPosts = async (req: Request, res: Response) => {
    const paging = plainToClass(Paging, req.body as Paging, {excludeExtraneousValues: true});
    console.log(paging);
    const response = await postService.getAllPostsWithPagination(paging);
    return res.status(response.code).json(response);
};

const getSinglePost = async (req: Request, res: Response) => {
    // Get the post id
    const {id} = req.params;

    const response = await postService.getPostById(+id);
    console.log(response, 'REPONSE');
    res.status(response.code).json(response);
};


const createNewPost = async (req: RequestUser, res: Response) => {
    const {content} = req.body;
    const userId = req.userId;
    console.log(userId, 'userId');
    console.log(content, 'content');
    console.log(req.files, 'req files');

    // console.log(req.files, "FILES");
    let imgUrls;
    if (req.files) {
        imgUrls = (req.files as IImage[]).map((img) => {
            return {
                path: img.path.replace("\\", "/"),
            };
        });
    }
    const post = plainToClass(
        Post,
        {
            content: content,
            userId: userId,
            images: imgUrls,
        },
        {excludeExtraneousValues: true}
    );
    const response = await postService.createNewPost(post);
    return res.status(response.code).json(response);

};

const deletePost = async (
    req: RequestUser,
    res: Response,
    next: NextFunction
) => {
    const postId = req.params.postId;
    const userId = req.userId!;
    const response = await postService.deletePostById(+postId, +userId);
    return res.status(response.code).json(response);
};

const editPost = async (
    req: RequestUser,
    res: Response,
    next: NextFunction
) => {
    const postId = Number(req.params.postId);
    const userId = Number(req.userId);

    const content = req.body.content;
    const images = req.files;
    let rmImages = [];
    if (req.body.rmImages) {
        rmImages = JSON.parse(req.body.rmImages);
    }


    const postObj = plainToClass(Post, {
        content,
        userId,
        images: (images as IImage[]).map(img => {
            return {
                path: img.path
            }
        }),
        rmImages
    }, {
        excludeExtraneousValues: true
    })

    console.log(postObj, 'postObj');
    const response = await postService.editPost(postId, userId, postObj);

    res.status(response.code).json(response);
};

const likeItem = async (req: RequestUser, res: Response, next: NextFunction) => {
    const itemId = Number(req.params.id);
    const userId = req.userId!;

    const response = await itemService.likeItem(itemId, userId);

    return res.status(response.code).json(response);
}


const unlikeItem = async (req: RequestUser, res: Response, next: NextFunction) => {
    const itemId = Number(req.params.id);
    const userId = req.userId!;

    const response = await itemService.unlikeItem(itemId, userId);

    return res.status(response.code).json(response);

}

const getLikes = async (req: RequestUser, res: Response, next: NextFunction) => {
    const itemId = Number(req.params.id);
    const userId = req.userId!;

    const response = await itemService.getLikes(itemId);

    return res.status(response.code).json(response);
}

router.get("/all", withPagination, asyncHandler(getAllPosts));

router.get(
    "/:id",
    // isAuth,
    [
        param("id")
            .exists()
            .toInt()
            .custom((value, {req}) => {
                if (!value) {
                    return Promise.reject("id must be a number");
                }
                return true;
            }),
        checkValidationErrors,
    ],
    asyncHandler(getSinglePost)
);

router.post(
    "/add-new-post",
    isAuth,
    multerPhoto().any(),
    checkFileType,
    validateNewPost,
    checkValidationErrors,
    asyncHandler(createNewPost)
);

router.delete("/:postId", isAuth, asyncHandler(deletePost));

router.put(
    "/:postId",
    isAuth,
    multerPhoto().any(),
    checkFileType,
    [body("content").trim()],
    checkValidationErrors,
    asyncHandler(editPost)
);

// POST - /api/posts/:id/like
router.post('/:id/like', isAuth, asyncHandler(likeItem));
router.post('/:id/unlike', isAuth, asyncHandler(unlikeItem));
router.get('/:id/likes', isAuth, asyncHandler(getLikes));


router.post(
    "/test/:postId",
    asyncHandler(async (req, res, next) => {
        const postId = +req.params.postId;
        await postService.removePostPhotos(postId);
        return res.json({
            message: "test",
        });
    })
);

router.post(
    "/testimg",
    multerPhoto().any(),
    checkFileType,
    asyncHandler(async (req, res, next) => {
        const photos = req.files;
        console.log(photos);
        // const photos = JSON.parse(req.body.images);
        // console.log(photos);
        res.json({
            message: "file uploaded",
        });
    })
);

router.get('/s/t', asyncHandler(async (req, res, next) => {
    // const resp = await postService.getPostById(14);
    // return res.json(resp);
    const models = require('../../database/models');


    const post = await models.item.findOne({
        where: {
            id: 1
        },
        include: [
            models.post,
            {
                model: models.user,
                as: 'likes',
                through: {attributes: []}
            }
        ],
        attributes: ['id', 'post.content', 'likes.firstName']

    });
    console.log(JSON.stringify(post, null, 2), 'post');
    // const likes = await post.getLikes();
    // console.log(likes, 'likes');
    console.log(Object.keys(post.__proto__), 'post');

    return res.json({
        message: 'test'
    })
}))

export default router;
