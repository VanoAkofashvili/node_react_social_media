import { createTheme } from "@material-ui/core/styles";

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
    type: "light",
    background: {
      default: "#f1f1f1",
    },
  },
});

export default theme;
