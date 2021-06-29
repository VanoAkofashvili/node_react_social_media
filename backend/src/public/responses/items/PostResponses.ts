import {BaseResponse} from "../BaseResponse";
import {IPost} from "../../models/items/Post";

export interface PostResponse extends BaseResponse {
    post?: IPost
}

export interface PostsResponse extends BaseResponse {
    posts?: IPost;
    numberOfPost?: number
}