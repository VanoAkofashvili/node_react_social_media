import {postRepo} from "../../repository/items/Post";
import {Post} from "../../public/models/items/Post";
import {CREATED, INTERNAL_SERVER_ERROR, OK} from "http-status-codes";
import {itemService} from "./Item";
import {IItem, Item} from "../../public/models/items/Item";
import {ExtendBaseResponse} from "../../public/responses/BaseResponse";

class PostService {
    public async getSinglePost(postId: number) {
        return await postRepo.getSinglePost(postId);
    }

    public async createNewPost(post: Post): Promise<ExtendBaseResponse> {
        // Corresponding item
        const c_item: Item = {
            itemType: post.itemType,
            userId: post.userId
        }

        try {
            const {item: cd} = await itemService.createNewItem(c_item); // Corresponding post item
            const {id} = cd as IItem;
            post.itemId = id;
            return await postRepo.createNewPost(post);
            // return Promise.resolve({
            //     code: CREATED,
            //     success: true,
            //     data: created_post
            // })
        } catch (err) {
            return Promise.resolve({
                code: INTERNAL_SERVER_ERROR,
                success: false
            })
        }
    }
}

export const postService = new PostService();