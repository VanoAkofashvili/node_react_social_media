import React from "react";
import {
  Avatar,
  List,
  ListItemIcon,
  ListItem,
  ListItemAvatar,
  Divider,
  ListSubheader,
  Paper,
  Box,
} from "@material-ui/core";
import { Typography } from "components/atoms/Typography";
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: sideWrapperWidth,
      position: "relative",
    },
    drawer: {
      width: sideWrapperWidth,
      flexShrink: 0,
      height: "100vh",
      position: "sticky",
      top: "0",
    },
    drawerClose: {
      display: "block",
    },
    list: {
      border: "none",
    },
    FF: {
      backgroundColor: "green",
      color: "white",
    },
    MH: {
      backgroundColor: "purple",
    },
    JF: {
      backgroundColor: "#1b40a7",
    },
  })
);

const Sidebar: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.drawer}>
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
        {/* pages you may like */}
        <ListSubheader>Pages You May Like</ListSubheader>
        <ListItem button>
          <ListItemAvatar>
            <Avatar variant="rounded" className={classes.FF}>
              <Box color="primary.contastText">FF</Box>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Football FC" />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar variant="rounded" className={classes.MH}>
            <Box color="primary.contrastText">M</Box>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Moto House" />
        </ListItem>
        <ListItem button>
          <ListItemAvatar>
            <Avatar variant="rounded" className={classes.JF}>
            <Box color="primary.contrastText">JF</Box>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Jazz Festivals" />
        </ListItem>
      </List>
    </Paper>
  );
};
export default Sidebar;
