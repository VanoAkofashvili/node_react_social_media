import {Item} from "../../public/models/items/Item";
import {itemRepo} from "../../repository/items/Item";
import {userService} from "../users/User";
import {StatusCodes} from "http-status-codes";

const {NOT_FOUND, INTERNAL_SERVER_ERROR, OK} = StatusCodes;

class ItemService {
    public async createNewItem(item: Item) {
        return await itemRepo.createNewItem(item);
    }

    public async deleteById(itemId: number) {
        return await itemRepo.deleteById(itemId);
    }

    public async getItemById(itemId: number) {
        const item = await itemRepo.getItemById(itemId);
        if (!item) {
            return Promise.reject({
                success: false,
                message: 'Item not found',
                code: INTERNAL_SERVER_ERROR
            })
        }

        return item;
    }

    public async likeItem(itemId: number, userId: number) {
        try {
            const {user} = await userService.findUserById(userId);
            if (!user) {
                return Promise.resolve({
                    code: NOT_FOUND,
                    message: "User not found",
                    success: false,
                })
            }

            const item = await this.getItemById(itemId);

            await item.addLike(user);

            return Promise.resolve({
                success: true,
                message: 'Liked successfully',
                code: OK
            })
        } catch (err) {
            return Promise.resolve({
                success: false,
                message: err.message,
                code: INTERNAL_SERVER_ERROR
            })
        }

    }
}

export const itemService = new ItemService();
