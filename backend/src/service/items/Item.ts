import {Item} from "../../public/models/items/Item";
import {itemRepo} from "../../repository/items/Item";
import {userService} from "../users/User";
import {StatusCodes} from "http-status-codes";

const {NOT_FOUND} = StatusCodes;

class ItemService {
    public async createNewItem(item: Item) {
        return await itemRepo.createNewItem(item);
    }

    public async deleteById(itemId: number) {
        return await itemRepo.deleteById(itemId);
    }

    public async likeItem(itemId: number, userId: number) {
        const {user} = await userService.findUserById(userId);


        if (!user) {
            return Promise.resolve({
                code: NOT_FOUND,
                message: "User not found",
                success: false,
            })
        }

        return await itemRepo.likeItem(itemId);
    }
}

export const itemService = new ItemService();
