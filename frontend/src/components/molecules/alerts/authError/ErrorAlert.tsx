import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Alert from "components/atoms/alerts/Alert";

interface Props {
  errors: string[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 600,
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: "10px",
      right: "10px",
    },
  })
);

const ErrorAlert: React.FC<Props> = ({ errors }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {errors.map((error, i) => (
        <Alert severity="error" key={i}>{error}</Alert>
      ))}
    </div>
  );
};

export default ErrorAlert;
