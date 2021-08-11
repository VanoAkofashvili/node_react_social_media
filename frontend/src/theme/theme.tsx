import { createTheme, Theme } from "@material-ui/core/styles";
import { store } from "redux_tk";
import { SM_THEME, THEME_DARK, THEME_LIGHT } from "utils/const/constants";
var _ = require('lodash');

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

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    mainBlue: Palette['primary'];
  }
  interface PaletteOptions {
    mainBlue: PaletteOptions['primary'];
  }
}

// let type = localStorage.getItem(SM_THEME);
const type = store.getState().dispay.theme

// console.log(type)

const theme = createTheme({
  status: {
    danger: "#f00",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "#root": {
          display: "flex",
          justifyContent: "center",
        },
      },
    },
  },
  palette: {
    type: type === THEME_DARK ? "dark" : "light",
    background: {
      default: type === THEME_DARK ? "#5d5d5d" : "#f1f1f1",
    },
    mainBlue: {
      main: '#00b8ff'
    },
  },
});

const lightTheme: Theme = _.cloneDeep(theme)
// lightTheme.palette.type = THEME_LIGHT
lightTheme.palette.type = THEME_LIGHT

const darkTheme = _.cloneDeep(theme)
darkTheme.palette.type = THEME_DARK


console.log(lightTheme.palette)
export default theme;
