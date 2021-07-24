import React from "react";
import { Button } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import { ButtonColors } from "../../../../assets/const/enums";

const useStyles = makeStyles((theme) =>
  createStyles({
    submit: {
      margin: "16px 0px",
    },
  })
);

interface ButtonProps {
  color: ButtonColors
}


const ButtonSubmit: React.FC<ButtonProps> = (
  // type = ButtonTypes["button"],
  props
) => {
  const styles = useStyles()

  return (
    <Button
      fullWidth
      variant="contained"
      type="submit"
      color={props.color}
      className={styles.submit}
    >
      {props.children}
    </Button>
  )
};
export default ButtonSubmit