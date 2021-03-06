import {Item} from "../../public/models/items/Item";
import {ItemResponse} from "../../public/responses/items";
import {StatusCodes} from "http-status-codes";

const {CREATED, OK, INTERNAL_SERVER_ERROR} = StatusCodes;

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
            return Promise.resolve({
                code: INTERNAL_SERVER_ERROR,
                message: err.message,
                success: false
            })
        }
    }

    public async deleteById(itemId: number) {
        try {
            const response = await models.item.findByPk(itemId);
            await response.destroy();
            return Promise.resolve({
                code: OK,
                success: true
            })
        } catch (err) {
            console.log(err.message, 'deleteById');
            return Promise.resolve({
                code: INTERNAL_SERVER_ERROR,
                success: false,
                message: err.message
            })
        }
    }

    public async getItemById(itemId: number) {
        try {
            return await models.item.findByPk(itemId);
        } catch (err) {
            return Promise.resolve({
                success: false,
                message: err.message,
                code: INTERNAL_SERVER_ERROR
            })
        }
    }

    public async countItemLikes(itemId: number) {
        try {
            const numOfLikes = models.item_like.count({
                where: {
                    itemId
                }
            })

            return numOfLikes;
        } catch (err) {
            console.log(err.message, 'countItemLikes');
            return Promise.resolve({
                success: false,
                message: err.message,
                code: INTERNAL_SERVER_ERROR
            })
        }
    }
}

export const itemRepo = new ItemRepository();
