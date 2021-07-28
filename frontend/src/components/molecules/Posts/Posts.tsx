import React from "react";
import Post from "../Post";

interface PostsListsProps {
  posts: IPost[];
}


console.log("PostsList")
const PostsLists: React.FC<PostsListsProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostsLists;
