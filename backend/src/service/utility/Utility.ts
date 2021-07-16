import {userService} from "../users/User";
import {postService} from "../items/Post";

class UtilityService {
    public async isPostBelongsToUser(userId: number, postId: number): Promise<boolean> {

        try {
            const {user} = await userService.getUserById(userId);
            const postResponse = await postService.getPostById(postId);
            const uId = JSON.parse(JSON.stringify(postResponse.post)).userId;

            if (user.id !== uId) {
                return Promise.resolve(false);
            }
            return Promise.resolve(true);
        } catch (err) {
            console.log(err.message, 'UtilityService isPostBelongsToUser');
            return false;
        }
    }
}

export const utilService = new UtilityService();