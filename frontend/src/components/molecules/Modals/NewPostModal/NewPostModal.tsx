import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { Divider } from "@material-ui/core";
import { TextAreaAutoSize } from "components/atoms/TextAreaAutoSize";
import Box from "components/atoms/Box";
// import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
// import MovieCreationOutlinedIcon from "@material-ui/icons/MovieCreationOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import FileInput from "../../inputs/FileInput";

import Fade from "@material-ui/core/Fade";
import ButtonSubmit from "../../../atoms/Buttons/ButtonSubmit";
import SentimentVerySatisfiedOutlinedIcon from "@material-ui/icons/SentimentVerySatisfiedOutlined";
import IconButton from "components/atoms/Buttons/IconButton";
import { Typography } from "components/atoms/Typography";

import useStyles from "./style";
// import axios from "utils/axios";

type ImageProps = FileList | null;

const NewPostModal: React.FC = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [images, setImages] = useState<ImageProps>(null);

  const handleClose = () => setOpen(false);

  // Handle posts Text change
  const handlePostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setPostContent(e.target.value);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    //@ts-ignore
    setImages(e.target.files);
  };

  // handle create new post
  const handleNewPost = (e: React.FormEvent) => {
    e.preventDefault();
    // @ts-ignore
    const files = new FormData();
    // const buffer = Array.from(images)
    // const imagBlob = buffer.map(file => URL.createObjectURL(file))
    // files.append('images', images)
    console.log(files);
    console.log(postContent);
    console.log(images);
    // axios.post("")
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
              <IconButton onClick={handleClose} className={classes.closeModal}>
                <CloseOutlinedIcon fontSize="medium" />
              </IconButton>
              <Typography variant="h5">
                Creating a Post
              </Typography>
            </Box>
            <Divider />
            <form onSubmit={handleNewPost}>
              <TextAreaAutoSize
                autoFocus
                minRows={5}
                onChange={handlePostChange}
                placeholder="Write a post"
                className={classes.textArea}
              />
              <div>{images && <h1>show Images</h1>}</div>
              <Box className={classes.extras}>
                <FileInput handleChange={handleImageChange} />
                <IconButton>
                  <SentimentVerySatisfiedOutlinedIcon
                    fontSize="large"
                    className={classes.emoji}
                  />
                </IconButton>
              <ButtonSubmit color="primary">Post</ButtonSubmit>
              </Box>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default NewPostModal;
