import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { contentWrapperWidth } from "../../../utils/const/wrappers";
import NewPostForm from "../../molecules/Forms/NewPost";
import Post from "../../molecules/Post";
import { MainBackground } from "../../../utils/const/colors";
import { useAppDispatch, useAppSelector } from "redux_tk/app/hook";
import PostsLists from "components/molecules/Posts";
import { useEffect } from "react";
import axios from "utils/axios";
// import { getAllPosts } from "redux_tk/features/posts/postsSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: MainBackground,
      width: contentWrapperWidth,
      padding: theme.spacing(3),
    },
  })
);

const Main: React.FC = () => {
  const classes = useStyles();
  // const { posts } = useAppSelector((state) => state.homePage);
  const [posts, setPosts ] = useState([])
  const dispatch = useAppDispatch()

  useEffect(() => {
    // axios.get('/api/posts/all').then(({data}) => setPosts(data.posts))
    // dispatch(getAllPosts())
  }, [dispatch])
//   const posts = [
//     {
//         "id": 1,
//         "content": "this is the first post",
//         "createdAt": "2021-07-22T12:00:14.000Z",
//         "updatedAt": "2021-07-22T12:00:14.000Z",
//         "userId": 1
//     },
//     {
//         "id": 2,
//         "content": "this is the second post",
//         "createdAt": "2021-07-22T12:00:14.000Z",
//         "updatedAt": "2021-07-22T12:00:14.000Z",
//         "userId": 1
//     },
//     {
//         "id": 3,
//         "content": "this is the third post",
//         "createdAt": "2021-07-22T12:00:14.000Z",
//         "updatedAt": "2021-07-22T12:00:14.000Z",
//         "userId": 2
//     },
//     {
//         "id": 4,
//         "content": "this is the fourth post",
//         "createdAt": "2021-07-22T12:00:14.000Z",
//         "updatedAt": "2021-07-22T12:00:14.000Z",
//         "userId": 2
//     }
// ]

  return (
    <main className={classes.root}>
      <NewPostForm />
      <PostsLists posts={posts} />
    </main>
  );
};
export default Main;
