import {postRepo} from "../../repository/items/Post";
import {Post} from "../../public/models/items/Post";
import {PostResponse} from "../../public/responses/items/PostResponses";
import {INTERNAL_SERVER_ERROR, OK} from "http-status-codes";
import {itemService} from "./Item";
import {IItem, Item} from "../../public/models/items/Item";
import {create} from "domain";

class PostService {
    public async getSinglePost(postId: number) {
        return await postRepo.getSinglePost(postId);
    }

    public async createNewPost(post: Post): Promise<PostResponse> {
        // Corresponding item
        const c_item: Item = {
            itemType: post.itemType,
            userId: post.userId
        }

        try {
            const {item: cd} = await itemService.createNewItem(c_item); // Corresponding post item
            const {id} = cd as IItem;
            post.itemId = id;
            const created_post = await postRepo.createNewPost(post);
        } catch (err) {
            return Promise.resolve({
                code: INTERNAL_SERVER_ERROR,
                success: false
            })
        }


        return Promise.resolve({
            code: OK,
            success: true
        });
    }
}

export const postService = new PostService();