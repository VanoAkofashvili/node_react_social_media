import {StatusCodes} from "http-status-codes";
import {ExtendBaseResponse, WithItemResponse} from "../../public/responses/BaseResponse";
import {User} from "../../public/models/user/User";

const models = require('../../database/models');

const {OK, INTERNAL_SERVER_ERROR, CREATED} = StatusCodes;


class UserRepository {
    public async createNewUser(userObj: User) {
        try {
            let createdUser = await models.user.create(userObj);
            createdUser = createdUser.get({plain: true});
            return Promise.resolve({
                code: CREATED,
                success: true,
                user: createdUser
            })

        } catch (err) {
            console.log('createNewUser', err.message);
            return Promise.resolve({
                code: INTERNAL_SERVER_ERROR,
                success: false,
                message: err.message
            })
        }
    }

    public async findUserById(userId: number): Promise<WithItemResponse> {
        try {
            const user = await models.user.findByPk(userId);
            return {
                user: user
            }
        } catch (err) {
            console.log(err);
            return Promise.resolve({
                code: INTERNAL_SERVER_ERROR,
                success: false
            })
        }
    }

    public async findUserByEmail(email: string): Promise<ExtendBaseResponse> {
        console.log('findUserByEmail');
        try {
            const user = await models.user.findOne({
                where: {
                    email
                },
            });
            return Promise.resolve({
                code: OK,
                success: true,
                data: user
            })
        } catch (err) {
            return Promise.resolve({
                code: INTERNAL_SERVER_ERROR,
                success: false,
                message: err.message
            })
        }
    }
}

export const userRepo = new UserRepository();