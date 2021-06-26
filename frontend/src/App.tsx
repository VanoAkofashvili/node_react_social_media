import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header'
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Stories from './components/Stories';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      // width: "800px"
    }
  }),
);

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <MainContent />
      <Stories />
    </div>
  );
}
