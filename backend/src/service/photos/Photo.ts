import {IPhoto} from "../../public/models/photo/Photo";
import {ExtendBaseResponse} from "../../public/responses/BaseResponse";
import {photoRepo} from "../../repository/photos/Photo";


class PhotoService {
    public async addPostPhotos(post: any, images: IPhoto): Promise<ExtendBaseResponse> {
        return await photoRepo.addPostPhotos(post, images);
    }
}

export const photoService = new PhotoService();