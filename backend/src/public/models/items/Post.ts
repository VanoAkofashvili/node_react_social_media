import {Expose} from "class-transformer";
import {IItem, Item} from "./Item";

export interface IPost extends IItem {
    content: string;
    imageUrl: string;
}

export class Post extends Item {
    @Expose() content: string;
    @Expose() imageUrl: string;
    @Expose() itemId?: number;
    // @Expose() id?: number;
    // @Expose() createdAt?: Date;
    // @Expose() updatedAt?: Date;

    // constructor(id: number, createdAt: Date, updatedAt: Date, itemType: string, userId: number, content: string) {
    constructor(content: string, imageUrl: string, itemType: string, userId: number, itemId?: number, id?: number, createdAt?: Date, updatedAt?: Date) {
        super(itemType, userId, id);
        this.content = content;
        this.imageUrl = imageUrl;
        if (itemId) {
            this.itemId = itemId;
        }
        // const optionals = {id, createdAt, updatedAt};
        //
        // Object.keys(optionals).forEach(key => {
        //     // @ts-ignore
        //     this[key] = optionals[key];
        // })
    }
}

