import { ListItemText } from "@material-ui/core";
import { createStyles, Theme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";

const CustomListItemText = withStyles((them: Theme) =>
  createStyles({
    root: {
      overflow: "hidden",
      display: "inline-block",
      whiteSpace: "nowrap",
    },
    primary: {
      textOverflow: "ellipsis",
    },
  })
)(ListItemText);

// const CustomListItemText: React.FC<ListItemTextProps> = ({ ...rest }) => {
//   return <ListItemText {...rest} />;
// };

export default CustomListItemText;
