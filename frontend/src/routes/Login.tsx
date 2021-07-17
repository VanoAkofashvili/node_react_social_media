import { createStyles, makeStyles } from "@material-ui/styles";
import React from "react";
import {LoginForm }from "../components/Forms";
import sideImg from '../assets/images/soc-media1.png';
import "./index.css";
// import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
    },
    imgDiv: { 
      width: '35%',
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
  })
);

export const Login: React.FC = () => {
    const classes = useStyles()
    // const matches = useMediaQuery('(min-width: 600px)')

  return (
    <div className={classes.root}>
      <div className={classes.imgDiv}>
        <img src={sideImg} className="bg_img" alt="connectnions"/>
      </div>
      <LoginForm />
    </div>
  );
};
