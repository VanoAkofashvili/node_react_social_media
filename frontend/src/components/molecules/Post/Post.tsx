import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  ListItemIcon,
  Divider,
  TextareaAutosize,
  Button,
} from "@material-ui/core";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";

import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
// import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";

import postOwnerAvatar from "../../../assets/avatar/2.jpeg";
import profileAvatar from "../../../assets/avatar/1.jpg";
import { MainBackground } from "../../../assets/const/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "white",
      marginTop: "20px",
      borderRadius: "15px",
    },
    actionsToPost: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    commentField: {
      border: "none",
      resize: "none",
      outline: "none",
      width: "100%",
      padding: "10px",
      borderRadius: "15px",
      backgroundColor: MainBackground,
    },
  })
);

interface PostProps {
  post: { id: string; content: string };
}

const Post: React.FC<PostProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="post owner avatar" src={postOwnerAvatar} />
          </ListItemAvatar>
          <ListItemText primary="Post Owner" secondary="Post date" />
          <IconButton>
            <MoreHorizOutlinedIcon />
          </IconButton>
        </ListItem>
        <ListItem>{props.post.content}</ListItem>
        <Divider />
        <ListItem className={classes.actionsToPost}>
          <ListItemIcon>
            <IconButton>
              <ChatBubbleOutlineOutlinedIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText secondary={`${0} comments`} />
          <ListItemIcon>
            <IconButton>
              <FavoriteBorderOutlinedIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText secondary={`${0} likes`} />
          <ListItemIcon>
            <IconButton>
              <ShareOutlinedIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText secondary={`${0} shares`} />
          <ListItemIcon>
            <IconButton>
              <BookmarkBorderOutlinedIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText secondary={`${0} saved`} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="profile avatar" src={profileAvatar} />
          </ListItemAvatar>
          <TextareaAutosize
            aria-label="comment field"
            placeholder="Comment..."
            className={classes.commentField}
          />
          <Button color="primary">
            post
          </Button>
        </ListItem>
      </List>
    </div>
  );
};
export default Post;
