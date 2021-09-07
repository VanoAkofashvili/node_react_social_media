import { createTheme } from "@material-ui/core/styles";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    mainBlue: Palette['primary'];
  }
  interface PaletteOptions {
    mainBlue: PaletteOptions['primary'];
  }
}

// I wrote two themes repeating some values,
// because I could not merge them, so if Adding new theme value
// is needed take it into to account to add in both themes

// Light theme
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

// Dark Theme
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
