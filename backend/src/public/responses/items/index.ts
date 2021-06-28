import {BaseResponse} from "../BaseResponse";
import {IItem} from "../../models/items/Item";

export interface ItemResponse extends BaseResponse {
    item?: IItem
}