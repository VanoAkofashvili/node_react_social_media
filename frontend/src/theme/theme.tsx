import { createTheme, Theme } from "@material-ui/core/styles";
import { store } from "redux_tk";
import { THEME_DARK, THEME_LIGHT } from "utils/const/constants";
var _ = require('lodash');

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

export const lightTheme = createTheme({
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
    type: "light",
    background: {
      default: "#f1f1f1",
    },
    mainBlue: {
      main: '#00b8ff'
    },
  },
});


export const darkTheme = createTheme({
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
    type:"dark",
    background: {
      default: "#5d5d5d",
    },
    mainBlue: {
      main: '#00b8ff'
    },
  },
});

// const lightTheme: Theme = _.cloneDeep(theme)
// // lightTheme.palette.type = THEME_LIGHT
// lightTheme.palette.type = THEME_LIGHT

// const darkTheme = _.cloneDeep(theme)
// darkTheme.palette.type = THEME_DARK


// console.log(lightTheme.palette)
// export default theme;
