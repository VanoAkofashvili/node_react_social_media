import {Expose} from "class-transformer";

export interface IPhoto {
    id: number;
    path: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IImage {
    fieldname: string;
    originalname: string;
    encoding: string;
    destination: string;
    filename: string;
    path: string;
    size: number
}

export class Photo {
    @Expose() originalname: string;
    @Expose() mimetype: string;
    @Expose() destination: string;
    @Expose() path: string;
    @Expose() size: number;

    constructor(originalname: string, mimetype: string, destination: string, path: string, size: number) {
        this.originalname = originalname;
        this.mimetype = mimetype;
        this.destination = destination;
        this.path = path;
        this.size = size;
    }

    // constructor(images: string[]) {
    //     this.images = images;
    // }
}

