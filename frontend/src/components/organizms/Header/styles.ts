import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  sideWrapperWidth,
} from "../../../utils/const/wrappers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      maxWidth: "1560px",
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
      flexBasis: "70%",
    },
    input: {
      paddingRight: "5px",
      width: "400px",
      borderRadius: "10px",
      backgroundColor: theme.palette.background.default,
      marginLeft: "10px",
    },
    buttonGroup: {
      padding: theme.spacing(1),
      display: "flex",
      alignItems: "center",
      width: "200px",
      marginLeft: "auto",
    },
    toolbar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
  })
);
export default useStyles;
