import {Item} from "../../public/models/items/Item";
import {itemRepo} from "../../repository/items/Item";

class ItemService {
    public async createNewItem(item: Item) {
        return await itemRepo.createNewItem(item);
    }

    public async deleteById(itemId: number) {
        return await itemRepo.deleteById(itemId);
    }
}

export const itemService = new ItemService();
