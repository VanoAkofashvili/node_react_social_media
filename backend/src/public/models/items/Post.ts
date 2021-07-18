import {Expose} from "class-transformer";
import {IItem, Item} from "./Item";
import {ItemTypes} from "./ItemTypes";

export interface IPost extends IItem {
    content: string;
    // imageUrl: string;
}

export class Post extends Item {
    @Expose() content: string;
    @Expose() images: string[];
    @Expose() rmImages?: number[];

    constructor(content: string, userId: number, images: string[], rmImages?: number[]) {
        super(ItemTypes.Post, userId);
        this.content = content;
        this.images = images;

        if (rmImages) {
            this.rmImages = rmImages;
        }

    }
}

//
// export class Post extends Item {
//     @Expose() content: string;
//     @Expose() itemId?: number;
//     // @Expose() id?: number;
//     // @Expose() createdAt?: Date;
//     // @Expose() updatedAt?: Date;
//
//     // constructor(id: number, createdAt: Date, updatedAt: Date, itemType: string, userId: number, content: string) {
//     constructor(content: string, itemType: string, userId: number, itemId?: number, id?: number, createdAt?: Date, updatedAt?: Date) {
//         super(itemType, userId, id);
//         this.content = content;
//         if (itemId) {
//             this.itemId = itemId;
//         }
//         // const optionals = {id, createdAt, updatedAt};
//         //
//         // Object.keys(optionals).forEach(key => {
//         //     // @ts-ignore
//         //     this[key] = optionals[key];
//         // })
//     }
// }
//
