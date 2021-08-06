import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { MainBackground } from "utils/const/colors";

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  list: {
    backgroundColor: "white",
    borderRadius: "15px",
  },
  listSubHeader: {
    borderRadius: "15px",
  },
  postInput: {
    flex: "1 1 70%",
    backgroundColor: MainBackground,
    padding: "10px",
    borderRadius: "15px",
    cursor: "pointer",
    textAlign: "start",
    "&:hover": {
      backgroundColor: "lightgray",
    },
  },
  buttonGroup: {
    display: "flex",
    marginLeft: "auto",
  },
  modal: {
    flexBasis: "70%",
  },
})
);
export default useStyles