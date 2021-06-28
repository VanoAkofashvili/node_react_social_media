export interface BaseResponse {
    code: number;
    success: boolean;
    message?: string;
}

export interface ExtendBaseResponse extends BaseResponse {
    data?: any;
}

// export interface IntListResponse extends BaseResponse {
//     data: number[];
// }