import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import { AlertProps } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";
import SnackbarContent from '@material-ui/core/SnackbarContent';


interface props {
  message: string;
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 600,
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: "10px",
      right: "10px"
    },
  }),
);

const ErrorAlert: React.FC<props & AlertProps> = ({ message, ...rest }) => {
  const [open , setOpen] = useState(true)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Snackbar  anchorOrigin={{vertical: "top", horizontal: "right"}} open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert {...rest}>{message}</Alert>
      </Snackbar>
      <Snackbar  anchorOrigin={{vertical: "top", horizontal: "right"}} open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert {...rest}>test</Alert>
      </Snackbar>
      
      </div>
  );
};

export default ErrorAlert;
