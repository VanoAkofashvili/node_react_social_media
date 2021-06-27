import {postRepo} from "../../repository/items/Post";

class PostService {
    public async getSinglePost(postId: number) {
        return await postRepo.getSinglePost(postId);
    }
}

export const postService = new PostService();