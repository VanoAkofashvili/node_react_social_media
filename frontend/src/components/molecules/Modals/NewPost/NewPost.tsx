import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import {
  Divider,
  Box,
  TextareaAutosize,
  Typography,
  IconButton,
} from "@material-ui/core";
// import PanoramaOutlinedIcon from "@material-ui/icons/PanoramaOutlined";
// import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
// import MovieCreationOutlinedIcon from "@material-ui/icons/MovieCreationOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import FileInput from "../../../atoms/Inputs/FileInput";

import Fade from "@material-ui/core/Fade";
import ButtonSubmit from "../../../atoms/Buttons/ButtonSubmit";
import { ButtonColors } from "../../../../utils/const/enums";

import useStyles from "./style";
import axios from "utils/axios";

type ImageProps = FileList | null

const NewPostModal: React.FC = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [images, setImages] = useState<ImageProps>();

  const handleClose = () => setOpen(false);

  // Handle posts Text change
  const handlePostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setPostContent(e.target.value);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => setImages(e.target.files)
  
  // handle create new post
  const handleNewPost = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(postContent);
    console.log(images);
    // axios.post({content: })
  };

  return (
    <div>
      <div onClick={() => setOpen(true)}>{props.children}</div>
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
              <Typography
                align="center"
                variant="h4"
                style={{ flexBasis: "80%" }}
              >
                Creating a Post
              </Typography>
              <IconButton onClick={handleClose} style={{ flexBasis: "10%" }}>
                <CloseOutlinedIcon fontSize="medium" />
              </IconButton>
            </Box>
            <Divider />
            <form onSubmit={handleNewPost}>
              <TextareaAutosize
                autoFocus
                minRows={5}
                onChange={handlePostChange}
                placeholder="Write a post"
                className={classes.textArea}
              />
              <FileInput handleChange={handleImageChange}/>
              <ButtonSubmit color={ButtonColors.primary}>Post</ButtonSubmit>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default NewPostModal;
