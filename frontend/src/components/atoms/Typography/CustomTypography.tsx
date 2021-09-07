import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const CustomTypgraphy = withStyles((theme: Theme) => createStyles({
    root: {
        color: theme.palette.text.secondary
    }
}))(Typography)

export default CustomTypgraphy
