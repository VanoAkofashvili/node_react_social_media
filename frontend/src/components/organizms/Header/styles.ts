import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  contentWrapperWidth,
  sideWrapperWidth,
} from "../../../utils/const/wrappers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    logoWrapper: {
      display: "flex",
      width: sideWrapperWidth,
      minWidth: sideWrapperWidth,
      cursor: "pointer",
      paddingLeft: theme.spacing(3),
    },
    logoIcon: {
      color: theme.palette.mainBlue.main,
    },
    searchBox: {
      marginLeft: theme.spacing(3),
      flexBasis: "70%"
    },
    input: {
      paddingRight: "5px",
      width: "60%",
      borderRadius: "10px",
      backgroundColor: theme.palette.background.default,
      marginLeft: "10px",
    },
    buttonGroup: {
      padding: theme.spacing(1),
      display: "flex",
      alignItems: "center",
      flexBasis: "30%",
      marginLeft: "auto"
    },
    toolbar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      maxWidth: "1560px",
    },
    secondWraper: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  })
);
export default useStyles;
