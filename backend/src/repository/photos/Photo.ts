import {IPhoto, Photo} from "../../public/models/photo/Photo";
import {StatusCodes} from "http-status-codes";

const {INTERNAL_SERVER_ERROR} = StatusCodes;

const models = require('../../database/models');

class PhotoRepository {
    public async createNewPhotos(images: string[]) {
        try {
            return await models.photo.bulkCreate(images);

        } catch (err) {
            console.log('createNewPhotos ERR', err);
            return Promise.resolve({
                code: INTERNAL_SERVER_ERROR,
                success: false,
                message: err.message
            })
        }
    }

}

export const photoRepo = new PhotoRepository();