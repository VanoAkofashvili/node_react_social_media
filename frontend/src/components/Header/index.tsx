import React from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  Box,
  InputAdornment,
  OutlinedInput,
} from "@material-ui/core";
import CropSquareIcon from "@material-ui/icons/CropSquare";
import SearchIcon from "@material-ui/icons/Search";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";

import { Blue, MainBackground } from "../../utils/colors";
import { contentWrapper, sideWrapperWidth } from "../../utils/wrappers";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  })
);

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar color="default" position="fixed" className={classes.appBar}>
      <Toolbar>
        <Box display="flex" style={{ width: sideWrapperWidth }}>
          <CropSquareIcon fontSize="large" style={{ color: Blue }} />
          <Typography variant="h5" style={{ paddingTop: "2px" }}>
            Square
          </Typography>
        </Box>
        <Box style={contentWrapper}>
          <OutlinedInput
            inputProps={{
              style: {
                padding: 10,
              },
            }}
            placeholder="Search"
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
            style={{
              paddingRight: "5px",
              width: "60%",
              borderRadius: "10px",
              backgroundColor: MainBackground,
            }}
          />
        </Box>
        <PersonAddOutlinedIcon style={{ marginLeft: "auto" }} />
      </Toolbar>
    </AppBar>
  );
}
