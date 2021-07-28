import React from "react";
import {
  Avatar,
  List,
  ListItemIcon,
  ListItem,
  ListItemAvatar,
  Divider,
  ListSubheader,
  Drawer,
} from "@material-ui/core";
import { ListItemText, Toolbar } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EventIcon from "@material-ui/icons/Event";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import CardGiftcardRoundedIcon from "@material-ui/icons/CardGiftcardRounded";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";
import profileAvatar from "../../../assets/avatar/1.jpg";
import { sideWrapperWidth } from "../../../utils/const/wrappers";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: sideWrapperWidth,
      flexShrink: 0,
      minHeight: "100vh",
      display: "none",
      backgroundColor: "white",
    },
    border: {
      border: "none"
    },
    drawerClose: {
      display: "block",
    },
    list: {
      border: "none",
    },
    FF: {
      backgroundColor: "green",
    },
    MH: {
      backgroundColor: "purple",
    },
    JF: {
      backgroundColor: "#1b40a7",
    },
  })
);

console.log("Sider")
const Sidebar: React.FC = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width: 712px)");

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, matches && classes.drawerClose)}
      classes={{paperAnchorDockedLeft: classes.border }}
    >
      <Toolbar />
      <List component="nav" className={classes.list}>
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
        <Divider />
        {/* pages you may lika */}
        <ListSubheader>Pages You May Like</ListSubheader>
        <ListItem button>
          <ListItemAvatar>
            <Avatar variant="rounded" className={classes.FF}>
              FF
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Football FC" />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar variant="rounded" className={classes.MH}>
              M
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Moto House" />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar variant="rounded" className={classes.JF}>
              JF
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Jazz Festivals" />
        </ListItem>
      </List>
    </Drawer>
  );
};
export default Sidebar;
