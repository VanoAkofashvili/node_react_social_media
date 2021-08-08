import React from "react";
import {
  List,
  Toolbar,
  ListSubheader,
  Divider,
  ListItem,
  Box,
} from "@material-ui/core";
import NewPostModal from "components/molecules/Modals/NewPostModal";
import profileAvatar from "../../../../assets/avatar/1.jpg";
import MovieCreationOutlinedIcon from "@material-ui/icons/MovieCreationOutlined";
import PanoramaOutlinedIcon from "@material-ui/icons/PanoramaOutlined";

import ListItemAvatarComponent from "components/atoms/ListItemAvatar";
import IconButton from "components/atoms/Buttons/IconButton";
import useStyles from "./styles";

const NewPostForm: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar />
      <List
        component="ul"
        subheader={
          <ListSubheader className={classes.listSubHeader}>
            Post Something
          </ListSubheader>
        }
        className={classes.list}
      >
        <Divider />
        <ListItem>
          <ListItemAvatarComponent
            alt="loged in user avatar"
            src={profileAvatar}
          />
          <Box className={classes.modal}>
            <NewPostModal>
              <Box className={classes.postInput}>
                Write what's in your mind...
              </Box>
            </NewPostModal>
          </Box>
          <Box className={classes.buttonGroup}>
            <IconButton onClick={(e: React.MouseEvent) => console.log(e)}>
              <MovieCreationOutlinedIcon fontSize="large" />
            </IconButton>
            <IconButton onClick={(e: React.MouseEvent) => console.log(e)}>
              <PanoramaOutlinedIcon fontSize="large" />
            </IconButton>
          </Box>
        </ListItem>
      </List>
    </>
  );
};
export default NewPostForm;
