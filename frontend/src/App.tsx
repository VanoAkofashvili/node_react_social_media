import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./pages/Home";
import { MainBackground } from "./utils/const/colors";

import PrivateRoute from "./HOC/PrivateRoute";
import { Login, SignUp } from "./pages";
import { useEffect } from "react";
import { useAppDispatch } from "redux_tk";
import { autoLogin } from "redux_tk";

import { testing } from "redux_tk";

console.log(testing)
console.log('App tsx')

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      backgroundColor: MainBackground,
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(autoLogin());
    // console.log('posts', getPosts)
  });

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <PrivateRoute component={Home} path="/home" exact />
          <Route component={Login} path="/login" />
          <Route component={SignUp} path="/signUp" />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
