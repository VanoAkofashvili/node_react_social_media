import React from "react";
import { createStyles, makeStyles } from "@material-ui/styles";

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

interface SignUpTemplateProps {
    component: React.ReactNode
}

export const SignUpTemplate: React.FC<SignUpTemplateProps> = (props) => {
const classes = useStyles();

return (
  <div className={classes.root}>
    {props.component}
  </div>
);
};
