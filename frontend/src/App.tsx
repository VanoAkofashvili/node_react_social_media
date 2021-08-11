import React, { useEffect, useMemo } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./pages/Home";

import PrivateRoute from "./utils/HOC/PrivateRoute";
import { Login, SignUp } from "./pages";
import { useAppDispatch, useAppSelector } from "redux_tk";
import { autoLogin } from "redux_tk";
import { useAuth } from "utils/hooks/useAuth";
import { ThemeProvider } from "@material-ui/core/styles";
// import themeDefault from "./theme";
import { lightTheme } from "theme/theme";
import { darkTheme } from "theme/theme";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.dispay);

  const isAuthenticated = useAuth();

  // if reload happends authenticate user
  if (isAuthenticated) {
    dispatch(autoLogin());
  }

  // useEffect(() => {
  //   theme.
  // }, [theme])

  const prefered_theme = useMemo(() => {
    // if (theme === null) {
    //   return "null";
    // } else if (theme === "light") {
    //   return "light"
    // }
    if (!theme) {
      return "theme is not given";
    } else {
      return theme;
    }
  }, [theme]);
  console.log(prefered_theme);

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        {/* <div className={classes.root}> */}
        <CssBaseline />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <PrivateRoute component={Home} path="/home" exact />
          <Route component={Login} path="/login" />
          <Route component={SignUp} path="/signUp" />
        </Switch>
        {/* </div> */}
      </Router>
    </ThemeProvider>
  );
};
export default App;
