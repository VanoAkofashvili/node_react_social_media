import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link, useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { TextFieldBordered } from "../../../atoms/TextField/TextFieldBordered";
import { ButtonColors } from "../../../../utils/const/enums";
import ButtonSubmit from "../../../atoms/Buttons/ButtonSubmit";
import { TextFieldVariant } from "../../../../utils/const/enums";
import { useAppDispatch, useAppSelector } from "redux_tk/app/hook";
import { loginUser } from "redux_tk/features/auth/authSlice";
import { useEffect } from "react";
import { Snackbar } from "@material-ui/core";
import { AUTH_TOKEN } from "utils/const/constants";

const useStyles = makeStyles((theme) =>
  createStyles({
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
  })
);

// TO-DO: remember me

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const history = useHistory()
  const [open, setOpen] = useState(true);


  const { errors, token, registerSuccess } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      localStorage.setItem(AUTH_TOKEN, token);
      history.push('/home')
      if (registerSuccess) {
        setTimeout(() => {
          dispatch(toggleRegisterSuccess(false));
        }, 3000); //
      }
    }
  }, [token, history, dispatch, registerSuccess]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    const credentials: ILoginCredentials = {
      email,
      password,
    };
    dispatch(loginUser(credentials));
  };

  const handleClose = () => {
    setOpen(false);
  };

  // TO-DO: change notification to alert
  return (
    <Container component="main" maxWidth="xs">
      {registerSuccess && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <p>This is a success message!</p>
        </Snackbar>
      )}
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
function toggleRegisterSuccess(arg0: boolean): any {
  throw new Error("Function not implemented.");
}

