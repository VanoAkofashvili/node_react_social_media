import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "23px",
      flex: "0 1 20%",
      minWidth: "240px",
      positino: "fixed",
    },
    rootHide: {
      display: "block",
    },
    list: {
      borderRadius: "10px",
      paddingBottom: 0,
    },
    subHeader: {
      display: "flex",
      justifyContent: "space-between",
      borderRadius: "10px",
    },
    viewed: {
      border: `3px solid ${theme.palette.mainBlue.main}`,
    },
    addStory: {
      color: theme.palette.mainBlue.main,
      backgroundColor: "white",
      boxShadow: ` 0 0 .3em ${theme.palette.background.default}, 0 0 .3em ${theme.palette.background.default}`,
    },
    btnSeeAll: {
      width: "100%",
      color: theme.palette.mainBlue.main,
    },
  })
);
export default useStyles;
