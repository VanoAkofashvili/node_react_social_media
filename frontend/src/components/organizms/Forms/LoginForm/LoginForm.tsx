import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { TextFieldBordered } from "../../../atoms/TextField/TextFieldBordered";
import { ButtonColors } from "../../../../const/enums";
import  ButtonSubmit  from "../../../atoms/Buttons/ButtonSubmit";
import { TextFieldVariant } from "../../../../const/enums";


const useStyles = makeStyles((theme) => createStyles({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

// TO-DO: remember me

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const onSubmit = (e: any) => {
    e.preventDefault();
    const obj = {
      email,
      password,
    };
    console.log(obj);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <TextFieldBordered
            variant={TextFieldVariant.outlined}
            margin="normal"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            type="text"
          />
          <TextFieldBordered
            required
            label="Password"
            variant={TextFieldVariant.outlined}
            margin="normal"
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            className
          /> */}
          <ButtonSubmit color={ButtonColors.primary}>SignIn</ButtonSubmit>
          <Grid container>
            <Grid item xs>
              <Link to="/forgot-password">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to="/signUp">Don't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
