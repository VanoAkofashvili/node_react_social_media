import {userService} from "../users/User";
import {AuthResponse} from "../../public/responses/auth/AuthResponses";
import {StatusCodes} from "http-status-codes";
import {User} from "../../public/models/user/User";
import {create} from "domain";


const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const {OK, CREATED} = StatusCodes;


class AuthService {
    public async login(email: string, password: string): Promise<AuthResponse> {
        const {data: user} = await userService.findUserByEmail(email);
        // No user is found
        if (!user) {
            console.log('!user');
            throw new Error('A user with this email could not be found.');
        }

        const isEqual = await bcrypt.compare(password, user.password);
        if (!isEqual) {
            console.log('!isEqual');
            throw new Error('Wrong password');

        }

        const {password: pass, updatedAt, ...forToken} = user.get({plain: true});
        const token = jwt.sign({
            user: forToken
        }, process.env.JWT_SECRET, {
            expiresIn: '20h'
        })

        return Promise.resolve({
            code: OK,
            success: true,
            token: `Bearer ${token}`,
            userId: user.id
        })
    }

    public async signUp(firstName: string, lastName: string, email: string, dateOfBirth: Date, sex: number, password: string): Promise<AuthResponse> {
        const hashedPassword = await bcrypt.hash(password, 12);
        const age = AuthService.calculateAge(dateOfBirth);
        const userInstance = new User(firstName, lastName, email, hashedPassword, age, dateOfBirth, sex);
        // return Promise.resolve({code: CREATED, success: true, userId: createdUser.id});
        const createdUser = await userService.createNewUser(userInstance);
        console.log(createdUser, 'CREATED_USER')
        return Promise.resolve({
            code: CREATED,
            success: true,
            // @ts-ignore
            userId: createdUser.user.id
        })

    }

    private static calculateAge(dateOfBirth: Date) {
        const today = new Date();
        const birthDate = new Date(dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
}

export const authService = new AuthService();
