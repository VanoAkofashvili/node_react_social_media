import {IPhoto, Photo} from "../../public/models/photo/Photo";
import {INTERNAL_SERVER_ERROR, OK} from "http-status-codes";

const models = require('../../database/models');

class PhotoRepository {
    public async addPostPhotos(postInstance: any, images: IPhoto) {
        try {
            console.log(Object.keys(postInstance.__proto__), 'POST INSTANCE');
            const photos = await postInstance.createPhoto(images);
            console.log(photos, 'ADDED PHOTOS');
            return {
                code: OK,
                success: true,
                data: []
            }
        } catch (err) {
            console.log(err);
            return Promise.resolve({
                code: INTERNAL_SERVER_ERROR,
                success: false
            })
        }
    }
}

export const photoRepo = new PhotoRepository();