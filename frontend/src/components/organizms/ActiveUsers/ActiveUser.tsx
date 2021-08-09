import { Paper, Theme, Toolbar } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        float: "right",
    },
    paper: {
        with: "100%"
    }
  })
);

const ActiveUsers: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <h1>Active Users</h1>
        <h1>Active Users</h1>
        <h1>Active Users</h1>
      </Paper>
    </div>
  );
};

export default ActiveUsers;
