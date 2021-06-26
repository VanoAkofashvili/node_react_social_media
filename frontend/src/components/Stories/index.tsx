import React from "react";
import {
  Toolbar,
  Box,
  List,
  ListSubheader,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import { Blue, MainBackground } from "../../utils/colors";
import { Avatar, ListItemAvatar } from "@material-ui/core";

import storyAvatar from "../../static/avatar/2.jpeg";
const date = new Date()

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "20px",
      backgroundColor: MainBackground,
    },
    list: {
      width: "300px",
      backgroundColor: "white",
      borderRadius: "10px",
    },
    subHeader: {
      display: "flex",
      justifyContent: "space-between",
      borderRadius: "10px",
    },
    viewed: {
        border: `3px solid ${Blue}`
    }
  })
);

export default function Stories() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Toolbar />
      <Box>
        <List
          component="nav"
          subheader={
            <ListSubheader component="div" className={classes.subHeader}>
              Suggest Stories
              <IconButton>
                <MoreHorizOutlinedIcon />
              </IconButton>
            </ListSubheader>
          }
          className={classes.list}
        >
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="profile" src={storyAvatar} />
            </ListItemAvatar>
            <ListItemText primary="Hallword Moon" secondary={date.toDateString()} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="profile" src={storyAvatar} />
            </ListItemAvatar>
            <ListItemText primary="Hallword Moon" secondary={date.toDateString()}/>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="profile" src={storyAvatar} className={classes.viewed}/>
            </ListItemAvatar>
            <ListItemText primary="Hallword Moon" secondary={date.toDateString()}/>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="profile" src={storyAvatar} />
            </ListItemAvatar>
            <ListItemText primary="Hallword Moon" secondary={date.toDateString()}/>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="profile" src={storyAvatar} />
            </ListItemAvatar>
            <ListItemText primary="Hallword Moon" secondary={date.toDateString()}/>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}
