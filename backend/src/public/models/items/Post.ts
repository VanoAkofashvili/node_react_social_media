import {Expose} from "class-transformer";
import {IItem, Item} from "./Item";

export interface IPost extends IItem {
    content: string
}

export class Post extends Item {
    @Expose() content: string;
    // @Expose() id?: number;
    // @Expose() createdAt?: Date;
    // @Expose() updatedAt?: Date;

    // constructor(id: number, createdAt: Date, updatedAt: Date, itemType: string, userId: number, content: string) {
    constructor(content: string, itemType: string, userId: number, id?: number, createdAt?: Date, updatedAt?: Date) {
        super(itemType, userId, id);
        this.content = content;

        // const optionals = {id, createdAt, updatedAt};
        //
        // Object.keys(optionals).forEach(key => {
        //     // @ts-ignore
        //     this[key] = optionals[key];
        // })
    }
}

