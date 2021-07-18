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
import { MainBackground } from "./const/colors";

import PrivateRoute from "./HOC/PrivateRoute";
import { Login, SignUp } from "./pages";

import { Counter } from "redux/Counter";

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

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <PrivateRoute component={Home} path="/home" exact />
          <PrivateRoute component={Login} path="/login" />
          <PrivateRoute component={SignUp} path="/signUp" />
          <Route path="/counter" exact><Counter /></Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
