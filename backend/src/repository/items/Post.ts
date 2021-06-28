import statusCodes, {OK} from "http-status-codes";
import {Post} from "../../public/models/items/Post";
import {PostResponse} from "../../public/responses/items/PostResponses";

const models = require('../../database/models');

class PostRepository {
    public async getSinglePost(postId: number) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    code: statusCodes.OK,
                    posts: [
                        {
                            content: 'this is the first post',
                            userId: 1
                        }
                    ],
                    success: true
                })
            }, 5000)
        })
        const data = await promise;
        return Promise.resolve(data);
    }

    public async createNewPost(post: Post): Promise<PostResponse> {
        const c_post = await models.Post.build(post);

        console.log(JSON.stringify(c_post, null, 4), 'created_post');
        return Promise.resolve({
            code: OK,
            success: true
        })

    }
}

export const postRepo = new PostRepository();
