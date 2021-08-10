import React, { useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { contentWrapperWidth } from "../../../utils/const/wrappers";
import NewPostForm from "../../molecules/Forms/NewPost";
import { useAppDispatch, useAppSelector } from "redux_tk/app/hook";
import PostsLists from "components/molecules/Posts";
// import { homeReducers } from "redux_tk/features/posts2/homeThunks";
import { getAllPosts}  from "redux_tk";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
      width: "100%",
      // maxWidth: contentWrapperWidth,
      // padding: theme.spacing(3),
      
    },
  })
);

const Main: React.FC = () => {
  const classes = useStyles();
  const { posts } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <main className={classes.root}>
      <NewPostForm />
      <PostsLists posts={posts} />
    </main>
  );
};
export default Main;
