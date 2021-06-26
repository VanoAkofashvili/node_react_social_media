import React from "react";
import {
  Toolbar,
  Box,
  List,
  ListSubheader,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import { MainBackground } from "../../utils/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "20px",
      backgroundColor: MainBackground,
    },
    list: {
      width: "250px",
      backgroundColor: "white",
      borderRadius: "10px",
    },
    subHeader: {
      display: "flex",
      justifyContent: "space-between",
      borderRadius: "10px",
    },
  })
);

export default function Stories() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Toolbar />
      <Box>
        {/* <List
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
          <ListItem button>
            <ListItemAvatar></ListItemAvatar>
            <ListItemText primary="Jazz Festivals" />
          </ListItem>
        </List> */}
      </Box>
    </div>
  );
}
