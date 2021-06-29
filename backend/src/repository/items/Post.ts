import statusCodes, {INTERNAL_SERVER_ERROR, OK} from "http-status-codes";
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
        try {
            const created_post = await models.sequelize.models.Post.create({
                content: post.content,
                itemId: post.itemId
            });
            return Promise.resolve({
                code: OK,
                success: true,
                post: created_post
            })
        } catch (err) {
            console.log(err, 'err');
            return Promise.resolve({
                code: INTERNAL_SERVER_ERROR,
                success: false,
                message: err.message
            })
        }


    }
}

export const postRepo = new PostRepository();