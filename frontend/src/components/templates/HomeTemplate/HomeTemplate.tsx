import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Hidden } from "@material-ui/core";
import Sidebar from "../../molecules/Sidebar";
import Posts from "../../organizms/PostsOnHome";
import Header from "../../organizms/Header";
import Stories from "../../molecules/Stories";
import ActiveUsers from "components/organizms/ActiveUsers";

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
      <Header />
      {/* <Hidden smDown>
        <Sidebar />
      </Hidden> */}
      <Grid container spacing={3} className={classes.grid}>
        <Grid item sm={12} md={5}>
          <Posts />
          {/* <Paper className={classes.paper}>Posts</Paper> */}
        </Grid>
        <Hidden smDown>
          <Grid item className={classes.stories}>
            <Stories />
            {/* <Paper className={classes.paper}>Storius</Paper> */}
          </Grid>
        </Hidden>
        <Hidden mdDown>
          <Grid item className={classes.active}>
            <ActiveUsers />
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};
