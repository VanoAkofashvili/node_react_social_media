import {Item} from "../../public/models/items/Item";
import {ItemResponse} from "../../public/responses/items";
import {CREATED, INTERNAL_SERVER_ERROR} from "http-status-codes";

const models = require('../../database/models');

class ItemRepository {
    public async createNewItem(item: Item): Promise<ItemResponse> {
        try {
            const item_create = await models.item.create(item);
            return Promise.resolve({
                code: CREATED,
                success: true,
                item: item_create
            })
        } catch (err) {
            console.log(err.message);
            
            return Promise.resolve({
                code: INTERNAL_SERVER_ERROR,
                message: err.message,
                success: false
            })
        }
    }
}

export const itemRepo = new ItemRepository();
