import {Expose, plainToClass} from "class-transformer";

class User {
    @Expose() username: string;
    @Expose() age: number;

    constructor(username: string, age: number) {
        this.age = age;
        this.username = username;
    }

    public printInfo() {
        console.log(this.username, this.age);
    }
}

const obj = {
    username: 'shota',
    age: 22
}

const newOjb = plainToClass(User, obj, {excludeExtraneousValues: true});

newOjb.printInfo();

const obj2 = {
    id: 1,
    username: 'vano',
    age: 121,
    sex: 'male'
}

