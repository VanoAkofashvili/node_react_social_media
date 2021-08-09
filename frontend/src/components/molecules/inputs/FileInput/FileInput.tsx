import React from "react";
import { Button} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import PanoramaOutlinedIcon from '@material-ui/icons/PanoramaOutlined'; 

type FileInputProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const useStyles = makeStyles((theme: Theme) => createStyles({
  panoroma: {
    color: theme.palette.text.secondary
  }
}))

const FileInput: React.FC<FileInputProps> = (props) => {
  const classes = useStyles()
  return (
    <>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="raised-button-file"
        multiple
        type="file"
        onChange={props.handleChange}
      />
      <label htmlFor="raised-button-file">
        <Button component="span">
          <PanoramaOutlinedIcon className={classes.panoroma} fontSize="large"/>
        </Button>
      </label>
    </>
  );
};
export default FileInput;
