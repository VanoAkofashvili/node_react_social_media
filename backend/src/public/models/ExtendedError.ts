export class ExtendedError extends Error {
    public statusCode: number;
    public data: any;

    constructor(statusCode: number, message?: string, data?: any) {
        super(message);
        this.statusCode = statusCode;
        this.data = data;
    }
}
