import {Expose} from "class-transformer";

export interface IPost {
    id: number,
    content: string,
    itemId: number
}

export class Post {
    @Expose() id: number;
    @Expose() content: string;
    @Expose() itemId: number;

    constructor(id: number, content: string, itemId: number) {
        this.id = id;
        this.content = content;
        this.itemId = itemId;
    }
}