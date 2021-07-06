import {postRepo} from "../../repository/items/Post";
import {Post} from "../../public/models/items/Post";
import {StatusCodes} from "http-status-codes";
import {WithItemResponse} from "../../public/responses/BaseResponse";
import {PostsResponse} from "../../public/responses/items/PostResponses";
import {userService} from "../users/User";
import {create} from "domain";
import {photoRepo} from "../../repository/photos/Photo";

const {INTERNAL_SERVER_ERROR, CREATED} = StatusCodes;

class PostService {
    public async getPostById(postId: number) {
        return await postRepo.getPostById(postId);
    }

    public async createNewPost(post: Post): Promise<WithItemResponse> {
        try {
            const {user} = await userService.findUserById(post.userId);
            const item = await user.createItem({
                itemType: post.itemType
            })
            const createdPost = await item.createPost({
                content: post.content
            })
            // create photos
            const photos = await photoRepo.createNewPhotos(post.images);
            await createdPost.addPhotos(photos);

            const createdPostWithAllFields = await this.getPostById(createdPost.id);

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
}

export const postService = new PostService();