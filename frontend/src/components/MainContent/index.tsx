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
import { MainBackground } from "../../utils/colors";
import { contentWrapperWidth } from "../../utils/wrappers";
import NewPostModal from "../Modals/NewPost/NewPostModal";
import profileAvatar from "../../static/avatar/1.jpg";
import MovieCreationOutlinedIcon from "@material-ui/icons/MovieCreationOutlined";
import PanoramaOutlinedIcon from "@material-ui/icons/PanoramaOutlined";
import Post from './Post'

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
      display:"flex",
      marginLeft: "auto",
    },
  })
);

export default function MainContent() {
  const classes = useStyles();

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
          <div style={{flexBasis: "70%"}}>
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
      <Post />
    </main>
  );
}
