import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Hidden } from "@material-ui/core";
import Sidebar from "../../molecules/Sidebar";
import Main from "../../organizms/PostsOnHome";
import Header from "../../organizms/Header";
import Stories from "../../molecules/Stories";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: "1560px",
      margin: "auto",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    grid: {
      justifyContent: "space-between",
    },
    sider: {
      width: "250px",
    },
    active: {
      width: "250px",
    },
    stories: {
      width: "260px",
    },
  })
);

export const HomeTemplate: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={12}>
            <Header />
          {/* <Paper className={classes.paper}>xs=12</Paper> */}
        </Grid>
        <Hidden smDown>
          <Grid item className={classes.sider}>
              <Sidebar />
            {/* <Paper className={classes.paper}>Sider</Paper> */}
          </Grid>
        </Hidden>
        <Grid item sm={12} md={5}>
            <Main />
          {/* <Paper className={classes.paper}>Posts</Paper> */}
        </Grid>
        <Hidden smDown>
          <Grid item className={classes.stories}>
              <Stories />
            {/* <Paper className={classes.paper}>Storius</Paper> */}
          </Grid>
        </Hidden>
        {/* <Hidden mdDown>
          <Grid item className={classes.active}>
            <Paper className={classes.paper}>active</Paper>
          </Grid>
        </Hidden> */}
      </Grid>
    </div>
  );
};
