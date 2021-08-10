import React, { FC } from "react";
import { Hidden, Grid, useMediaQuery } from "@material-ui/core";
import clsx from "clsx";
import useStyles from './styles'

type HomeTemplateProps = {
  Header: FC;
  Sidebar: FC;
  Posts: FC;
  Stories: FC;
  ActiveUsers: FC;
};

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  Header,
  Sidebar,
  Stories,
  Posts,
  ActiveUsers,
}) => {
  const classes = useStyles();
  const match = useMediaQuery("(max-width: 777px)");

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
          <Grid item className={classes.stories}>
            <Stories />
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
