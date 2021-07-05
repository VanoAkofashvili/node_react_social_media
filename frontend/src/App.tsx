import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./routes/Home";
import { MainBackground } from "./const/colors";

import PrivateRoute from "./modules/components/HOC/PrivateRoute";
import { Login, SignUp } from "./routes";

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
        </Switch>
      </div>
    </Router>
  );
};
export default App;
