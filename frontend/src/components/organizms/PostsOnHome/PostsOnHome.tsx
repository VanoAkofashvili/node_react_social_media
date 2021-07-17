import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { contentWrapperWidth } from "../../../const/wrappers";
import NewPostForm from "../../molecules/Forms/NewPost";
import Post from "../../molecules/Post";
import { MainBackground } from "../../../const/colors";

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
  const [posts, setPosts] = useState<any[]>([]);

  return (
    <main className={classes.root}>
      <NewPostForm />
      {/* fetched posts */}
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </main>
  );
};
export default Main;
