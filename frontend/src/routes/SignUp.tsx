import { createStyles, makeStyles } from "@material-ui/styles";
import React from "react";
import { SignUpForm } from "../components/organizms/Forms";

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

export const SignUp: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SignUpForm />
    </div>
  );
};
