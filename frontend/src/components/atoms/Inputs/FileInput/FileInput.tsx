import React from "react";
import { Button } from "@material-ui/core";

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
          UPLOAD Image
          {/* <PanoramaOutlinedIcon fontSize="large"/> */}
        </Button>
      </label>
    </div>
  );
};
export default FileInput;
