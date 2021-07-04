import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./routes/Home";
import { MainBackground } from "./const/colors";

import PrivateRoute from './components/HOC/PrivateRoute'

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
          <PrivateRoute component={Home} path="/home" exact/>
          {/* <PrivateRoute component={L} */}
        </Switch>
      </div>
    </Router>
  );
};
export default App;
