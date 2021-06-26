import React from "react";
import {
  Avatar,
  List,
  ListItemIcon,
  ListItem,
  ListItemAvatar,
  Box,
} from "@material-ui/core";
import { ListItemText, Toolbar } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EventIcon from "@material-ui/icons/Event";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import CardGiftcardRoundedIcon from "@material-ui/icons/CardGiftcardRounded";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";
import profileAvatar from "../../static/avatar/1.jpg";
import { sideWrapperWidth } from "../../utils/wrappers";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: sideWrapperWidth,
      flexShrink: 0,
      display: "none",
    },
    drawerClose: {
      display: "block"
    },
  })
);

export default function Sidebar() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width: 712px)");

  return (
    <Box className={clsx(classes.drawer, matches && classes.drawerClose)}>
      <Toolbar />
      <List component="nav">
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="profile" src={profileAvatar} />
          </ListItemAvatar>
          <ListItemText primary="Shota Archemashvili" secondary="@shotius" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Feed" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountTreeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <OndemandVideoIcon />
          </ListItemIcon>
          <ListItemText primary="Videos" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PhotoSizeSelectActualOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Photos" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DescriptionOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Files" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CardGiftcardRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItem>
      </List>
    </Box>
  );
}
