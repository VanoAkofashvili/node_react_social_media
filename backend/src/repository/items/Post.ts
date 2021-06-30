import statusCodes, {INTERNAL_SERVER_ERROR, OK} from "http-status-codes";
import {Post} from "../../public/models/items/Post";
import {PostResponse, PostsResponse} from "../../public/responses/items/PostResponses";

const models = require('../../database/models');

class PostRepository {
    // Needs better approach
    public async getPostById(postId: number): Promise<PostResponse> {
        try {
            const post = await models.post.findByPk(postId, {
                include: [
                    {
                        model: models.item,
                        attributes: []
                    },
                ],
                attributes: [
                    ['itemId', 'id'],
                    'content',
                    [models.Sequelize.col('item.createdAt'), 'createdAt'],
                    [models.Sequelize.col('item.updatedAt'), 'updatedAt'],
                    [models.Sequelize.col('item.userId'), 'userId']
                ]
            });
            console.log(JSON.stringify(post, null, 4));
            return Promise.resolve({
                code: OK,
                success: true,
            })
        } catch (err) {
            console.log(err);
            return Promise.resolve({
                code: INTERNAL_SERVER_ERROR,
                message: err.message,
                success: false,
            })
        }
    }

    public async createNewPost(post: Post): Promise<PostResponse> {
        try {
            const created_post = await models.post.create({
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

    public async getAllPosts(where = {}): Promise<PostsResponse> {
        try {
            const posts = await models.post.findAll({
                where,
                include: [
                    {
                        model: models.item,
                        required: true,
                        attributes: []

                    }
                ],
                attributes: [
                    ['itemId', 'id'],
                    'content',
                    [models.Sequelize.col('item.createdAt'), 'createdAt'],
                    [models.Sequelize.col('item.updatedAt'), 'updatedAt'],
                    [models.Sequelize.col('item.userId'), 'userId']
                ]
            })
            return Promise.resolve({
                code: OK,
                success: true,
                posts: posts,
                numberOfPost: posts.length
            })
        } catch (err) {
            console.log(err);
            return Promise.resolve({
                success: false,
                code: INTERNAL_SERVER_ERROR,
                message: err.message
            })
        }
    }
}

export const postRepo = new PostRepository();
