import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Hidden } from "@material-ui/core";
import Sidebar from "../../molecules/Sidebar";
import Posts from "../../organizms/PostsOnHome";
import Header from "../../organizms/Header";
import Stories from "../../molecules/Stories";
import ActiveUsers from "components/organizms/ActiveUsers";
import { useMediaQuery } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
      flexGrow: 1,
      position: "relative",
      width: "100%",
      maxWidth: "1560px",
      margin: "auto",
    },
    sidebar: {
      display: "none"
    },
    grid: {
      justifyContent: "space-around",
      flexWrap: "nowrap"
    },
    active: {
      padding: theme.spacing(1),
      paddingTop: "0px",
      width: "260px"
    },
    posts: {
      paddingTop: theme.spacing(3),
      padding: theme.spacing(1),
    },
    stories: {
      padding: theme.spacing(1),
      paddingTop: "0px",
      maxWidth: "280px"
    },
  })
);

export const HomeTemplate: React.FC = () => {
  const classes = useStyles();
  const match = useMediaQuery("(max-width: 777px)")

  return (
    <div className={classes.root}>
      <Header />
      <div className={clsx(match && classes.sidebar)}>
        <Sidebar />
      </div>
      <Grid container className={classes.grid}>
        <Grid item xs={12} sm={12} md={8} lg={6} className={classes.posts}>
          <Posts />
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.stories} >
            <Stories/>
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid item className={classes.active}>
          <ActiveUsers />
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};
