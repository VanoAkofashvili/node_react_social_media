import {postRepo} from "../../repository/items/Post";
import {Post} from "../../public/models/items/Post";
import {CREATED, INTERNAL_SERVER_ERROR, OK} from "http-status-codes";
import {itemService} from "./Item";
import {IItem, Item} from "../../public/models/items/Item";
import {ExtendBaseResponse} from "../../public/responses/BaseResponse";
import {PostsResponse} from "../../public/responses/items/PostResponses";
import {Photo} from "../../public/models/photo/Photo";
import {create} from "domain";
import {photoRepo} from "../../repository/photos/Photo";
import {photoService} from "../Photo/Photo";

class PostService {
    public async getPostById(postId: number) {
        return await postRepo.getPostById(postId);
    }

    public async createNewPost(post: Post, images: Photo[]): Promise<ExtendBaseResponse> {
        // Corresponding item
        const c_item: Item = {
            itemType: post.itemType,
            userId: post.userId
        }
        try {
            const {item} = await itemService.createNewItem(c_item); // Corresponding post item
            const {post: createdPost} = await postRepo.createNewPost(post, item);
            await photoService.addPostPhotos(createdPost, images);
            return {
                code: OK,
                success: true,
                data: []
            }
        } catch (err) {
            return Promise.resolve({
                code: INTERNAL_SERVER_ERROR,
                success: false
            })
        }
    }

    public async getAllPosts(where = {}): Promise<PostsResponse> {
        return await postRepo.getAllPosts(where);
    }
}

export const postService = new PostService();