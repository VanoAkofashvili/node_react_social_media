import { Blue } from "../../../utils/const/colors";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // display: "none",
      marginTop: "23px",
      flex: "0 1 20%",
      // backgroundColor: theme.palette.background.default,
      marginRight: "30px",
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
      border: `3px solid ${Blue}`,
    },
    addStory: {
      color: Blue,
      backgroundColor: "white",
      boxShadow: ` 0 0 .3em ${theme.palette.background.default}, 0 0 .3em ${theme.palette.background.default}`,
    },
    btnSeeAll: {
      width: "100%",
      color: Blue,
    },
  })
);
export default useStyles;
