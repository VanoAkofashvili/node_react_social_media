import {StatusCodes} from "http-status-codes";
import {Post} from "../../public/models/items/Post";
import {PostResponse, PostsResponse} from "../../public/responses/items/PostResponses";

const {INTERNAL_SERVER_ERROR, OK} = StatusCodes;

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
                    {
                        model: models.photo,
                        through: {
                            attributes: []
                        }
                    }
                ],
                attributes: [
                    ['itemId', 'id'],
                    'content',
                    [models.Sequelize.col('item.createdAt'), 'createdAt'],
                    [models.Sequelize.col('item.updatedAt'), 'updatedAt'],
                    [models.Sequelize.col('item.userId'), 'userId']
                ]
            });
            return Promise.resolve({
                code: OK,
                success: true,
                post: post
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

    public async createNewPost(post: Post, fromItem: any): Promise<PostResponse> {
        try {
            // const created_post = await models.post.create({
            //     content: post.content,
            //     itemId: post.itemId
            // });

            // const created_post = await models.item.createPost(post);
            const created_post = await fromItem.createPost(post);
            return Promise.resolve({
                code: OK,
                success: true,
                post: created_post
            })
        } catch (err) {
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
            return Promise.resolve({
                success: false,
                code: INTERNAL_SERVER_ERROR,
                message: err.message
            })
        }
    }

    public async deletePostById(postId: number) {
        try {
            const post = await models.post.findByPk(postId);
            const postPhotos = await post.getPhotos();
            await post.removePhotos(postPhotos);
            const postItem = await post.getItem();
            await postItem.destroy();
            await post.destroy();
            // console.log(post, 'POST');
            // console.log(postPhotos, 'POST PHOTOS');
            // console.log(removePhotos, 'REMOVE PHOTOS');
            return Promise.resolve({
                code: OK,
                success: true,
                message: 'Post deleted'
            })
        } catch (err) {
            console.log('deletePostById ERR', err.message);
            return Promise.resolve({
                code: INTERNAL_SERVER_ERROR,
                success: false,
                message: err.message
            })
        }
    }

    public async editPost(postId: number, postData: Post) {
        try {

            const post = await models.post.findByPk(postId);
            post.content = postData.content;
            // await post.removePhotos();


            console.log(Object.keys(post.__proto__));
            const postPhotos = await post.getPhotos();
            console.log(postPhotos, 'POST PHOTOS');
            console.log('POST_RESPONSE', post);


            const photos = postData.images.filter(img => {
                return {
                    path: img
                }
            })

            // await post.setPhotos(photos);
            // await post.save();

            // const newPost = await this.getPostById(postId);

            return Promise.resolve({
                code: OK,
                success: true,
                post: 'post'
            })
        } catch (err) {
            console.log('editPost ERR', err.message);
            return Promise.resolve({
                code: INTERNAL_SERVER_ERROR,
                success: false,
                message: err.message
            })
        }
    }

    public async removePostPhotos(postId: number) {
        try {
            const post = await models.post.findByPk(postId);
            const postPhotos = await post.getPhotos();
            await post.removePhotos(postPhotos);

        } catch (err) {
            console.log('removePostPhotos ERR', err.message);
            return Promise.resolve({
                code: INTERNAL_SERVER_ERROR,
                success: false,
                message: err.message
            })
        }
    }
}

export const postRepo = new PostRepository();
