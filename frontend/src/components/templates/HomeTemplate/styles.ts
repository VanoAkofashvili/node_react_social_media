import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
      flexGrow: 1,
      position: "relative",
      width: "100%",
      maxWidth: "1560px",
      margin: "auto",
    },
    sidebar: {
      display: "none",
    },
    grid: {
      justifyContent: "space-around",
      flexWrap: "nowrap",
    },
    active: {
      padding: theme.spacing(1),
      paddingTop: "0px",
      width: "260px",
    },
    posts: {
      paddingTop: theme.spacing(3),
      padding: theme.spacing(1),
    },
    stories: {
      padding: theme.spacing(1),
      paddingTop: "0px",
      maxWidth: "280px",
    },
  })
);
export default useStyles;
