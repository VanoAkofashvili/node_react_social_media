import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "20px",
      borderRadius: "15px",
    },
    actionsToPost: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    commentField: {
      border: "none",
      resize: "none",
      outline: "none",
      width: "100%",
      padding: "10px",
      borderRadius: "15px",
      backgroundColor: theme.palette.background.default,
    },
  })
);
export default useStyles;
