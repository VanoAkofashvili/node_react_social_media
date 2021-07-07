export interface BaseResponse {
    code: number;
    success: boolean;
    message?: string;
}

export interface ExtendBaseResponse extends BaseResponse {
    data?: any;
}

export interface WithItemResponse {
    [item: string]: any;
}

// export interface ErrorResponse {
//     statusCode?: number,
//     message?: string,
//     data?: any,
//     success: false
// }

// export interface IntListResponse extends BaseResponse {
//     data: number[];
// }