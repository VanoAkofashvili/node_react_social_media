import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./redux_tk/app/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from './theme'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
