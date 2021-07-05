import {BaseResponse} from "../BaseResponse";

export interface AuthResponse extends BaseResponse {
    token?: string,
    userId?: number
}
