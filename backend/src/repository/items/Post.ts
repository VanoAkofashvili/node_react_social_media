import statusCodes from "http-status-codes";

class PostRepository {
    public async getSinglePost(postId: number) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    code: statusCodes.OK,
                    posts: [
                        {
                            content: 'this is the first post',
                            userId: 1
                        }
                    ],
                    success: true
                })
            }, 5000)
        })
        const data = await promise;
        return Promise.resolve(data);
    }
}

export const postRepo = new PostRepository();
