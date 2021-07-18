import {postRepo} from "../../repository/items/Post";
import {Post} from "../../public/models/items/Post";
import {StatusCodes} from "http-status-codes";
import {WithItemResponse} from "../../public/responses/BaseResponse";
import {PostsResponse} from "../../public/responses/items/PostResponses";
import {userService} from "../users/User";
import {photoRepo} from "../../repository/photos/Photo";
import {utilService} from "../utility/Utility";
import {create} from "domain";
import {NOT} from "sequelize/types/lib/deferrable";
import {itemService} from "./Item";

const {INTERNAL_SERVER_ERROR, CREATED, FORBIDDEN, NOT_FOUND, OK} = StatusCodes;

class PostService {
    public async getPostById(postId: number) {
        let {post} = await postRepo.getPostById(postId);
        //@ts-ignore
        let {likes} = await itemService.getLikes(postId);
        post = JSON.parse(JSON.stringify(post));
        likes = JSON.parse(JSON.stringify(likes));
        //@ts-ignore
        post.likes = likes;
        //@ts-ignore
        post.numberOfLikes = likes.length;


        console.log(likes, 'likes');
        console.log(post, 'post');
        return Promise.resolve({
            code: OK,
            success: true,
            post: post
        })
    }

    public async getActualPostObject(postId: number) {
        return await postRepo.getActualPostObject(postId);
    }

    // public async createNewPost(post: Post): Promise<WithItemResponse> {
    public async createNewPost(post: Post) {
        try {
            const user = await userService.getUserById(post.userId);
            // console.log(Object.keys(user.__proto__));
            const item = await user.createItem({
                itemType: post.itemType
            })
            const createdPost = await item.createPost({
                content: post.content
            })

            // add photos
            for await (const img of post.images) {
                await createdPost.createPhoto(img);
            }

            const createdPostWithAllFields = await this.getPostById(createdPost.itemId);

            return Promise.resolve({
                code: CREATED,
                success: true,
                post: createdPostWithAllFields.post,
            })

        } catch (err) {
            console.log(err);
            return Promise.resolve({
                code: INTERNAL_SERVER_ERROR,
                success: false,
                message: err.message
            })
        }
    }

    public async getAllPosts(where = {}): Promise<PostsResponse> {
        return await postRepo.getAllPosts(where);
    }

    public async deletePostById(postId: number, userId: number) {
        // const user = await userService.getUserById(userId);
        const postResponse = await this.getPostById(postId);
        if (!postResponse.post) {
            return Promise.resolve({
                code: NOT_FOUND,
                success: false,
                message: 'Post not found'
            })
        }
        const isPostBelongsToUser = await utilService.isPostBelongsToUser(userId, postId);
        // const uId = JSON.parse(JSON.stringify(postResponse.post)).userId;
        if (!isPostBelongsToUser) {
            return Promise.resolve({
                code: FORBIDDEN,
                success: false,
                message: 'Forbidden'
            })
        }
        return await postRepo.deletePostById(postId);
    }

    public async editPost(postId: number, userId: number, postData: Post) {
        console.log(postData, 'POSTDATA');

        const postResponse = await postRepo.getPostById(postId);

        if (!postResponse.post) {
            return Promise.resolve({
                code: NOT_FOUND,
                success: false,
                message: 'Post not found'
            })
        }

        const belongsToUser = await utilService.isPostBelongsToUser(userId, postId);

        if (!belongsToUser) {
            return Promise.resolve({
                code: FORBIDDEN,
                success: false,
                message: 'Forbidden'
            })
        }

        // check if old images (which will be removed) belongs to post
        const actualPost = await this.getActualPostObject(postId);
        const hasPhotos = await actualPost.hasPhotos(postData.rmImages);

        if (!hasPhotos) {
            return Promise.resolve({
                code: FORBIDDEN,
                success: false,
                message: "Photos don't belong to this post"
            })
        }

        return await postRepo.editPost(actualPost, postData);

    }

    public async removePostPhotos(postId: number) {
        return await postRepo.removePostPhotos(postId);
    }
}

export const postService = new PostService();