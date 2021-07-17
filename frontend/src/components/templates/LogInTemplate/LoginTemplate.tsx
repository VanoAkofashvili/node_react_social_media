import React from "react";
import { createStyles, makeStyles } from "@material-ui/styles";
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
    },
    bg_img: {
        margin: "1rem",
        width: "100%",
        maxWidth: "350px",
        marginLeft: "auto",
    }
    
  })
);

interface LogInTemplateProps {
    image: any,
    loginForm: React.ReactNode
}

export const LogInTemplate: React.FC<LogInTemplateProps> = (props) => {
    const classes = useStyles()
    // const matches = useMediaQuery('(min-width: 600px)')

  return (
    <div className={classes.root}>
      <div className={classes.imgDiv}>
        <img src={props.image} className={classes.bg_img} alt="connections"/>
      </div>
      {props.loginForm}
    </div>
  );
};
