import {ExtendBaseResponse} from "../../public/responses/BaseResponse";
import {userRepo} from "../../repository/users/User";
import {User} from "../../public/models/user/User";


class UserService {
    public async createNewUser(userObj: User) {
        return await userRepo.createNewUser(userObj);
    }

    public async findUserById(userId: number): Promise<ExtendBaseResponse> {
        return await userRepo.findUserById(userId);
    }

    public async findUserByEmail(email: string) {
        return await userRepo.findUserByEmail(email);
    }
}

export const userService = new UserService();