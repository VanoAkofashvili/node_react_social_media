import {Expose, Type} from "class-transformer";

export interface iPaging {
    offset: number;
    limit: number;
    subQuery: boolean
}

export class Paging {
    @Expose() offset: number;
    @Expose() limit: number;
    @Expose() subQuery: boolean;

    constructor(offset: number, limit: number, subQuery: boolean) {
        this.offset = offset;
        this.limit = limit;
        this.subQuery = subQuery;
    }
}
