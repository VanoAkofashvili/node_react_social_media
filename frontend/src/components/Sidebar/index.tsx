import React from "react";
import { sideWrapperWidth } from "../../utils/wrappers";
import {
  Avatar,
  List,
  ListItemIcon,
  ListItem,
  ListItemAvatar,
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
import { Drawer } from "@material-ui/core";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
  drawer: {
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
  }
}));

export default function Sidebar() {

  const classes = useStyles()
  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      // classes={{
      //   paper: classes.drawerPaper,
      // }}
    >
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
    </Drawer>
  );
}
