import { createTheme } from "@material-ui/core/styles";
import { SM_THEME, THEME_DARK } from "utils/const/constants";

declare module "@material-ui/core/styles/createTheme" {
  interface Theme {
    status: {
      danges: React.CSSProperties["color"];
    };
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
}


const theme = createTheme({
  status: {
    danger: "#f00",
  },
  overrides: {
    MuiPaper: {
      root: {
        //   backgroundColor: "green"
      },
    },
  },
  palette: {
    type: localStorage.getItem(SM_THEME) === THEME_DARK ? 'dark' : "light",
    background: {
        default: localStorage.getItem(SM_THEME) === THEME_DARK ? "#5d5d5d" : "#f1f1f1"
    },
  },
});

export default theme;
