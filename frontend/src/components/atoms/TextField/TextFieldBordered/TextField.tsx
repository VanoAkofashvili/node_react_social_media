import React from "react";
import { TextField } from "@material-ui/core";
import { TextFieldVariant } from "../../../../assets/const/enums";

type TextMargin = "normal" | undefined;

interface TextFieldProps {
  label: string;
  variant: TextFieldVariant;
  type: string;
  value: string;
  onChange(e: any): void;
  id?: string;
  name?: string;
  required?: boolean;
  margin: TextMargin;
  autoComplete?: string;
  autoFocus?: boolean;
}

export const TextFieldBordered: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField
      fullWidth
      label={props.label}
      variant={props.variant}
      required={props.required}
      margin={props.margin}
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      id={props.id}
      autoComplete={props.autoComplete}
      autoFocus={props.autoFocus}
    />
  );
};
