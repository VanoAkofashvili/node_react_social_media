import {StatusCodes} from "http-status-codes";
import {Post} from "../../public/models/items/Post";
import {PostResponse, PostsResponse} from "../../public/responses/items/PostResponses";
import {itemService} from "../../service/items/Item";
import {photoRepo} from "../photos/Photo";
import {Paging} from "../../public/models/general/Paging";

const {INTERNAL_SERVER_ERROR, OK, NOT_FOUND} = StatusCodes;

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
                        attributes: ['id', 'path', 'createdAt', 'updatedAt'],
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
            //
            // let likes = await itemService.getLikes(postId); // postId is same as itemId bcz. one to one relationship
            // likes = JSON.parse(JSON.stringify(likes)).likes.slice();
            // console.log(likes, 'likesss');


            // console.log(Object.keys(post.__proto__));

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

    public async getAllPosts(paging: Paging, where = {}): Promise<PostsResponse> {
        try {
            console.log(paging, 'PAGING');
            const {count, rows: posts} = await models.post.findAndCountAll({
                include: [
                    {
                        model: models.item,
                        required: true,
                        attributes: [],
                    },
                    {
                        model: models.photo,
                        attributes: ['id', 'path', 'createdAt', 'updatedAt'],
                        // separate: true,
                    }
                ],
                attributes: [
                    ['itemId', 'id'],
                    'content',
                    [models.Sequelize.col('item.createdAt'), 'createdAt'],
                    [models.Sequelize.col('item.updatedAt'), 'updatedAt'],
                    [models.Sequelize.col('item.userId'), 'userId']
                ],
                offset: paging.offset,
                limit: paging.limit,
                subQuery: false,
            });
            // console.log(posts);
            // const {count, rows: posts} = await models.post.findAndCountAll({
            //     offset: paging.offset,
            //     limit: paging.limit,
            //     subQuery: false
            // })
            // console.log(posts);
            // const modifiedPosts = JSON.parse(JSON.stringify(posts)).map((post: any) => {
            //     let {photos, ...rest} = post;
            //     photos = photos.slice(0, 1);
            //
            //     return {
            //         ...rest,
            //         photos
            //     }
            // })

            return Promise.resolve({
                code: OK,
                success: true,
                posts,
                numberOfPost: count
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
            await itemService.deleteById(postId);
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

    public async editPost(actualPost: any, postData: Post) {
        try {
            console.log(actualPost, 'actual post in repo');
            actualPost.content = postData.content;

            for await (const img of postData.images) {
                await actualPost.createPhoto(img);
            }

            await photoRepo.deletePhotosById(postData.rmImages!);

            await actualPost.save();

            return Promise.resolve({
                code: OK,
                success: true,
                post: 'Post updated successfully'
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
            return true;

        } catch (err) {
            console.log('removePostPhotos ERR', err.message);
            return false;
            // return Promise.resolve({
            //     code: INTERNAL_SERVER_ERROR,
            //     success: false,
            //     message: err.message
            // })
        }
    }

    public async getActualPostObject(postId: number) {
        try {
            return await models.post.findByPk(postId);
        } catch (err) {
            console.log('getActualPostObject', err.message);
            return Promise.resolve({
                code: INTERNAL_SERVER_ERROR,
                success: false,
                message: err.message
            })
        }
    }

}

export const postRepo = new PostRepository();
