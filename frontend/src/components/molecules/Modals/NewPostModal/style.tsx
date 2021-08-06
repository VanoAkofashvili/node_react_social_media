import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "10px",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: "30%",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    textArea: {
      marginTop: "10px",
      outline: "none",
      border: "none",
    },
    headerStyle: {
      color: "rgba(0, 0, 0, 0.54)",
      fontSize: "2em",
      boxSizing: "border-box",
      listStyle: "none",
      fontFamily:  "Roboto Helvetica Arial sans-serif",
      fontWeight: "normal",
      lineHeight:" 48px"
    }
  })
);

export default useStyles