import React from "react";
import {
  Toolbar,
  List,
  ListSubheader,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
  Paper,
  Avatar,
  ListItemAvatar,
} from "@material-ui/core";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import clsx from "clsx";

import storyAvatar from "../../../assets/avatar/2.jpeg";
import { Button } from "@material-ui/core";
import useStyles from "./styles";
const date = new Date();

export default function Stories() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width: 972px)");

  return (
    <>
      <Toolbar />
      <Paper className={clsx(classes.root, matches && classes.rootHide)}>
        <List
          component="ul"
          subheader={
            <ListSubheader component="div" className={classes.subHeader}>
              Suggested Stories
              <IconButton>
                <MoreHorizOutlinedIcon />
              </IconButton>
            </ListSubheader>
          }
          className={classes.list}
        >
          <Divider />
          <ListItem>
            <ListItemIcon>
              <IconButton className={classes.addStory}>
                <AddOutlinedIcon />
              </IconButton>
            </ListItemIcon>
            <ListItemText
              primary="Create Your Story"
              secondary="Click beside to create yours"
            />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar alt="profile" src={storyAvatar} />
            </ListItemAvatar>
            <ListItemText
              primary="Hallword Moon"
              secondary={date.toDateString()}
            />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar alt="profile" src={storyAvatar} />
            </ListItemAvatar>
            <ListItemText
              primary="Hallword Moon"
              secondary={date.toDateString()}
            />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                alt="profile"
                src={storyAvatar}
                className={classes.viewed}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Hallword Moon"
              secondary={date.toDateString()}
            />
          </ListItem>
          <Button className={classes.btnSeeAll}>See All</Button>
        </List>
      </Paper>
    </>
  );
}
