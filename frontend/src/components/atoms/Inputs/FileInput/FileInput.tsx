import React from "react";
import { Button } from "@material-ui/core";
import PanoramaOutlinedIcon from '@material-ui/icons/PanoramaOutlined'; 

type FileInputProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FileInput: React.FC<FileInputProps> = (props) => {
  return (
    <div>
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
          <PanoramaOutlinedIcon style={{ color: "rgba(0, 0, 0, 0.54)"}}fontSize="large" color="inherit"/>
        </Button>
      </label>
    </div>
  );
};
export default FileInput;
