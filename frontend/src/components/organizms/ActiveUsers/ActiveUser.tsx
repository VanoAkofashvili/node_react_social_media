import React from "react";
import { Avatar, Box } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "components/atoms/ListItemText";
import {
  Divider,
  List,
  ListSubheader,
  Paper,
  Theme,
  Toolbar,
  ListItemAvatar,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import storyAvatar from "../../../assets/avatar/2.jpeg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(3),
    },
    paper: {
      with: "100%",
    },
    list: {
      
    },
  })
);

const ActiveUsers: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Toolbar />
      <Paper className={classes.paper}>
        <List
          component="ul"
          subheader={
            <ListSubheader component="div">Active Users</ListSubheader>
          }
          className={classes.list}
        >
          <Divider />
          <ListItem button>
            <ListItemAvatar>
              <Avatar alt="profile" src={storyAvatar} />
            </ListItemAvatar>
            <ListItemText primary="Hallword Moon" />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar alt="profile" src={storyAvatar} />
            </ListItemAvatar>
            <ListItemText primary="Hallword Moon" />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar alt="profile" src={storyAvatar} />
            </ListItemAvatar>
            <ListItemText primary="Hallword Moon" />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar alt="profile" src={storyAvatar} />
            </ListItemAvatar>
            <ListItemText primary="Hallword Moon" />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar alt="profile" src={storyAvatar} />
            </ListItemAvatar>
            <ListItemText primary="Hallword Moon 1234567890" />
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar alt="profile" src={storyAvatar} />
            </ListItemAvatar>
            {/* <ListItemText primary="Hallword Moon 123456" /> */}
            <Box component="h3" overflow="hidden" textOverflow="ellipsis" color="primary">123456789012345678</Box>
          </ListItem>
          <ListItem button>
            <ListItemAvatar>
              <Avatar alt="profile" src={storyAvatar} />
            </ListItemAvatar>
            <ListItemText primary="Hallword Moon" />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
};

export default ActiveUsers;
