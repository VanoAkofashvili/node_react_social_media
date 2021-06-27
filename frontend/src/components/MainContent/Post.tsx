import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
//   Divider
} from "@material-ui/core";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";

import postOwnerAvatar from "../../static/avatar/2.jpeg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "white",
      marginTop: "20px",
      borderRadius: "15px",
    },
    header: {},
  })
);

export default function Post() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box component="div" className={classes.header}>
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
          <ListItem>
            <Box>adsfa;lkdsjfa;lkdjfa;lkdmc;alkdjfa;lkdjf</Box>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}
