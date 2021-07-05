import { createStyles, makeStyles } from "@material-ui/styles";
import React from "react";
import {LoginForm }from "../modules/components/Forms";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
    },
  })
);

export const Login: React.FC = () => {
    const classes = useStyles()

  return (
    <div className={classes.root}>
      <LoginForm />
    </div>
  );
};
