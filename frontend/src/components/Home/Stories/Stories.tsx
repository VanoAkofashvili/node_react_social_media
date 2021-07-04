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
  ListItemIcon,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import { Blue, MainBackground } from "../../../const/colors";
import { Avatar, ListItemAvatar } from "@material-ui/core";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import clsx from "clsx";

import storyAvatar from "../../../assets/avatar/2.jpeg";
import { Button } from "@material-ui/core";
const date = new Date();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "none",
      marginTop: "23px",
      flex: "0 1 20%",
      backgroundColor: MainBackground,
      marginRight: "30px",
      minWidth: "240px",
      positino: "fixed"
    },
    rootHide: {
      display: 'block'
    },
    list: {
      backgroundColor: "white",
      borderRadius: "10px",
      paddingBottom: 0,
    },
    subHeader: {
      display: "flex",
      justifyContent: "space-between",
      borderRadius: "10px",
    },
    viewed: {
      border: `3px solid ${Blue}`,
    },
    addStory: {
      color: Blue,
      backgroundColor: "white",
      boxShadow: ` 0 0 .3em ${MainBackground}, 0 0 .3em ${MainBackground}`,
    },
    btnSeeAll: {
      width: "100%",
      color: Blue,
    },
  })
);

export default function Stories() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width: 972px)");

  return (
    <div className={clsx(classes.root, matches && classes.rootHide)}>
      <Toolbar />
      <Box>
        <List
          component="nav"
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
      </Box>
    </div>
  );
}
