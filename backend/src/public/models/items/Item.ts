import {Expose} from "class-transformer";

export interface IItem {
    id?: number,
    createdAt?: Date,
    updatedAt?: Date,
    itemType: string,
    userId: number
}

export class Item {
    // @Expose() id?: number;
    // @Expose() createdAt?: Date;
    // @Expose() updatedAt?: Date;
    @Expose() itemType: string;
    @Expose() userId: number;


    // constructor(id: number, createdAt: Date, updatedDate: Date, itemType: string, userId: number) {
    constructor(itemType: string, userId: number, itemId?: number) {
        // this.id = id;
        // this.createdAt = createdAt;
        // this.updatedAt = updatedDate;
        this.itemType = itemType;
        this.userId = userId;

    }
}