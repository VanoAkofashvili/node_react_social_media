import {Expose} from "class-transformer";

export interface IItem {
    id?: number,
    createdAt?: Date,
    updatedAt?: Date,
    itemType: string,
    userId: number
}

export class Item {
    itemType: string;
    @Expose() userId: number;

    constructor(itemType: string, userId: number, itemId?: number) {
        this.itemType = itemType;
        this.userId = userId;
    }
}
