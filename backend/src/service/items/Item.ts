import {Item} from "../../public/models/items/Item";
import {itemRepo} from "../../repository/items/Item";

class ItemService {
    public async createNewItem(item: Item) {
        return await itemRepo.createNewItem(item);
    }
}

export const itemService = new ItemService();
