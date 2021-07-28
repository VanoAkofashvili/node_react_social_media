import React, { useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { contentWrapperWidth } from "../../../utils/const/wrappers";
import NewPostForm from "../../molecules/Forms/NewPost";
import { MainBackground } from "../../../utils/const/colors";
import { useAppDispatch, useAppSelector } from "redux_tk/app/hook";
import PostsLists from "components/molecules/Posts";
import { homeReducers } from "redux_tk/features/posts2/homeThunks";
// import { homeReducers}  from "redux_tk/features/posts2/homeSlice";

console.log('postsOnHome')
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
  const { posts } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(homeReducers.getAllPosts());
  }, [dispatch]);
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
