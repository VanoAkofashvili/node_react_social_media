import React from "react";
import { TextField } from "@material-ui/core";
import { TextFieldProps } from "@material-ui/core";

const CustomTextField: React.FC<TextFieldProps> = ({...rest}) => {
  return <TextField fullWidth {...rest}/>;
};
export default CustomTextField
