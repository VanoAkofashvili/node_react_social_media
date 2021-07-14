import {WithItemResponse} from "../../public/responses/BaseResponse";
import {userRepo} from "../../repository/users/User";
import {User} from "../../public/models/user/User";
import {StatusCodes} from "http-status-codes";

const {INTERNAL_SERVER_ERROR} = StatusCodes;


class UserService {
    public async createNewUser(userObj: User) {
        return await userRepo.createNewUser(userObj);
    }

    public async findUserById(userId: number): Promise<WithItemResponse> {
        return await userRepo.findUserById(userId);
    }

    public async findUserByEmail(email: string) {
        return await userRepo.findUserByEmail(email);
    }

    static async validateFollowable(userId: number, whoId: number) {

    }
}

export const userService = new UserService();