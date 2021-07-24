import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { contentWrapperWidth } from "../../../assets/const/wrappers";
import NewPostForm from "../../molecules/Forms/NewPost";
import Post from "../../molecules/Post";
import { MainBackground } from "../../../assets/const/colors";
import { useAppSelector } from "redux_tk/app/hook";

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
  const { posts } = useAppSelector((state) => state.homePage);

  return (
    <main className={classes.root}>
      <NewPostForm />

      {posts.map((post) => (
        <Post post={post} />
      ))}
    </main>
  );
};
export default Main;
