import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemIcon,
  Divider,
  TextareaAutosize,
  Button,
  Paper,
} from "@material-ui/core";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import IconButton from "components/atoms/Buttons/IconButton";

import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";

import postOwnerAvatar from "../../../assets/avatar/2.jpeg";
import profileAvatar from "../../../assets/avatar/1.jpg";
import useStyles from './styles'

interface PostProps {
  post: IPost;
}

const Post: React.FC<PostProps> = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0}>
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
          {/* likes */}
          <ListItemIcon>
            <IconButton>
              <FavoriteBorderOutlinedIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText secondary={`${0} likes`} />
          {/* comments */}
          <ListItemIcon>
            <IconButton>
              <ChatBubbleOutlineOutlinedIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText secondary={`${0} comments`} />
          {/* shares */}
          <ListItemIcon>
            <IconButton>
              <ShareOutlinedIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText secondary={`${0} shares`} />
          {/* bookmarks */}
          <ListItemIcon>
            <IconButton>
              <BookmarkBorderOutlinedIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText secondary={`${0} saved`} />
        </ListItem>
        <Divider />
        {/* comment field */}
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
    </Paper>
  );
};
export default Post;
