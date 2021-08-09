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
      width: "500px",
    },
    header: {
      textAlign: "center",
      position: "relative"
    },
    closeModal: {
      position: "absolute",
      right: "0",
      marginTop: "-8px"
    },
    textArea: {
      marginTop: "10px",
      outline: "none",
      border: "none",
      width: "100%",
      backgroundColor: theme.palette.background.default,
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(1),
      '&::placeholder': {
        color: theme.palette.text.secondary
      }
    },
    headerStyle: {
      color: theme.palette.text.secondary
    },
    extras: {
      width: "100%",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center"
    },
    emoji: {
      color: theme.palette.text.secondary,
    }
  })
);

export default useStyles