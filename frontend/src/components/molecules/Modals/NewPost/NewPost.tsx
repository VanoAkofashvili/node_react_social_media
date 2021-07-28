import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import {Divider,  Box, TextareaAutosize, Typography, IconButton } from "@material-ui/core";
// import PanoramaOutlinedIcon from "@material-ui/icons/PanoramaOutlined";
// import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
// import MovieCreationOutlinedIcon from "@material-ui/icons/MovieCreationOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import FileInput from "../../../atoms/Inputs/FileInput";

import Fade from "@material-ui/core/Fade";
import ButtonSubmit from "../../../atoms/Buttons/ButtonSubmit";
import { ButtonColors } from "../../../../utils/const/enums";

console.log('newPost')
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "10px",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: "30%",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    textArea: {
      marginTop: "10px",
      outline: "none",
      border: "none"
    }
  })
);

const NewPostModal: React.FC = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleOpen}>{props.children}</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Box component="div" className={classes.header}>
              <Typography align="center" variant="h4" style={{flexBasis: "80%"}}>
                Creating a Post
              </Typography>
              <IconButton onClick={handleClose} style={{flexBasis: "10%"}}>
                <CloseOutlinedIcon fontSize="medium"/>
              </IconButton>
            </Box>
            <Divider />
            <TextareaAutosize
              autoFocus
              minRows={5}
              placeholder="Write a post"
              className={classes.textArea}
            />
            <FileInput />
            <ButtonSubmit color={ButtonColors.primary}>Post</ButtonSubmit>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default NewPostModal;
