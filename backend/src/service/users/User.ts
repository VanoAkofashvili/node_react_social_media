import {WithItemResponse} from "../../public/responses/BaseResponse";
import {userRepo} from "../../repository/users/User";
import {User} from "../../public/models/user/User";
import {StatusCodes} from "http-status-codes";

const {INTERNAL_SERVER_ERROR} = StatusCodes;


class UserService {
    public async createNewUser(userObj: User) {
        return await userRepo.createNewUser(userObj);
    }

    public async getUserById(userId: number) {
        const user = await userRepo.getUserById(userId);
        if (!user) {
            return Promise.reject({
                success: false,
                message: 'User not found',
                code: INTERNAL_SERVER_ERROR
            })
        }
        return user;
    }

    public async findUserByEmail(email: string) {
        return await userRepo.findUserByEmail(email);
    }

}

export const userService = new UserService();