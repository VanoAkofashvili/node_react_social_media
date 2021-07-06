import {Expose} from "class-transformer";

export interface IPhoto {
    [index: number]: { path: string; }
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

