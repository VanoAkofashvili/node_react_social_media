import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  List,
  Toolbar,
  ListSubheader,
  Divider,
  ListItem,
  ListItemAvatar,
  Avatar,
  IconButton,
  Box,
} from "@material-ui/core";
import { MainBackground } from "../../../assets/const/colors";
import { contentWrapperWidth } from "../../../assets/const/wrappers";
import NewPostModal from "../../Modals/NewPost";
import profileAvatar from "../../../assets/avatar/1.jpg";
import MovieCreationOutlinedIcon from "@material-ui/icons/MovieCreationOutlined";
import PanoramaOutlinedIcon from "@material-ui/icons/PanoramaOutlined";
import Post from "../Posts";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: MainBackground,
      width: contentWrapperWidth,
      padding: theme.spacing(3),
    },
    list: {
      backgroundColor: "white",
      borderRadius: "15px",
    },
    listSubHeader: {
      borderRadius: "15px",
    },
    postInput: {
      flex: "1 1 70%",
      backgroundColor: MainBackground,
      padding: "10px",
      borderRadius: "15px",
      cursor: "pointer",
      textAlign: "start",
      "&:hover": {
        backgroundColor: "lightgray",
      },
    },
    buttonGroup: {
      display: "flex",
      marginLeft: "auto",
    },
  })
);

const Main: React.FC = () => {
  const classes = useStyles();

  const posts = [
    {
      id: "1",
      text: "This will be the first post"
    },
    {
      id: "2",
      text: "This is the second post"
    },
    {
      id: "3",
      text: "This is third post"
    },
    {
      id: "4",
      text: "This will be the first post"
    },
    {
      id: "5",
      text: "This is the second post"
    },
    {
      id: "6",
      text: "This is third post"
    }
  ]

  return (
    <main className={classes.root}>
      <Toolbar />
      <List
        component="ul"
        subheader={
          <ListSubheader className={classes.listSubHeader}>
            Post Something
          </ListSubheader>
        }
        className={classes.list}
      >
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="profile pic" src={profileAvatar} />
          </ListItemAvatar>
          <div style={{ flexBasis: "70%" }}>
            <NewPostModal>
              <Box className={classes.postInput}>
                Write what's in your mind...
              </Box>
            </NewPostModal>
          </div>
          <div className={classes.buttonGroup}>
            <IconButton>
              <MovieCreationOutlinedIcon fontSize="large" />
            </IconButton>
            <IconButton>
              <PanoramaOutlinedIcon fontSize="large" />
            </IconButton>
          </div>
        </ListItem>
      </List>
      {posts.map(post => (
        <Post post={post} key={post.id}/>
      ))}
    </main>
  );
};
export default Main;
