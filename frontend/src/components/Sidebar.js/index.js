import React from "react";
import { sideWrapper } from "../../utils/wrappers";
import {
  Avatar,
  List,
  ListItemIcon,
  ListItem,
  ListItemAvatar,
} from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EventIcon from "@material-ui/icons/Event";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import PhotoSizeSelectActualOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActualOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import CardGiftcardRoundedIcon from "@material-ui/icons/CardGiftcardRounded";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";

export default function Sidebar() {
  return (
    <div style={sideWrapper}>
      <List component="nav">
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="profile" src="" />
          </ListItemAvatar>
          <ListItemText primary="Ahmad Nur Fawaid" secondary="@afmad" />
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
    </div>
  );
}
