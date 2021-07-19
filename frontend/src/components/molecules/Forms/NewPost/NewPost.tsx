import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  List,
  Toolbar,
  ListSubheader,
  Divider,
  ListItem,
  Box,
} from "@material-ui/core";
import { MainBackground } from "../../../../const/colors";
import NewPostModal from "../../Modals/NewPost";
import profileAvatar from "../../../../assets/avatar/1.jpg";
import MovieCreationOutlinedIcon from "@material-ui/icons/MovieCreationOutlined";
import PanoramaOutlinedIcon from "@material-ui/icons/PanoramaOutlined";

import ListItemAvatarComponent from "../../../atoms/ListItemAvatar";
import { default as IconButton } from "../../../atoms/Buttons/IconButton/IconButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      backgroundColor: "white",
      borderRadius: "15px",
    },
    listSubHeader: {
      borderRadius: "15px",
    },
    postInput: {
      flex: "1 1 70%",
      backgroundColor: MainBackground,
      padding: "10px",
      borderRadius: "15px",
      cursor: "pointer",
      textAlign: "start",
      "&:hover": {
        backgroundColor: "lightgray",
      },
    },
    buttonGroup: {
      display: "flex",
      marginLeft: "auto",
    },
    modal: {
      flexBasis: "70%",
    },
  })
);

const NewPostForm: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar />
      {/* create post */}
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
            <IconButton
              icon={<MovieCreationOutlinedIcon fontSize="large" />}
              onClick={(e: React.MouseEvent) => console.log(e)}
            />
             <IconButton
              icon={<PanoramaOutlinedIcon fontSize="large" />}
              onClick={(e: React.MouseEvent) => console.log(e)}
            />
          </Box>
        </ListItem>
      </List>
    </>
  );
};
export default NewPostForm;
