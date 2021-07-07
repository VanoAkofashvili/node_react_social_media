import {Expose} from "class-transformer";
import {Request} from "express";

export interface RequestUser extends Request {
    userId?: number
}


export class User {
    @Expose() firstName: string;
    @Expose() lastName: string;
    @Expose() email: string;
    @Expose() age: number;
    @Expose() dateOfBirth: Date;
    @Expose() sex: number;
    @Expose() password: string;

    constructor(firstName: string, lastName: string, email: string, password: string, age: number, dateOfBirth: Date, sex: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.sex = sex;
        this.password = password;
    }

}

