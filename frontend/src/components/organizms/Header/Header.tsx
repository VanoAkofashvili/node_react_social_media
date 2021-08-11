import React from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  Box,
  InputAdornment,
  OutlinedInput,
  Hidden,
} from "@material-ui/core";
import CropSquareIcon from "@material-ui/icons/CropSquare";
import SearchIcon from "@material-ui/icons/Search";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import { IconButton } from "@material-ui/core";
import ThemeSwitcher from "components/atoms/Swithes/ThemeSwitcher";
import { THEME_DARK, THEME_LIGHT } from "utils/const/constants";
import useStyles from "./styles";
import { useAppDispatch, useAppSelector } from "redux_tk";
import { changeTheme } from "redux_tk/features/display/displaySlice";

export default function Header() {
  const { theme } = useAppSelector((state) => state.dispay);
  const dispatch = useAppDispatch()

  const classes = useStyles();

  const handleThemeSwitch = () => {
    if (theme === THEME_DARK) {
      dispatch(changeTheme(THEME_LIGHT))
    } else {
      dispatch(changeTheme(THEME_DARK))
    }
  };

  return (
    <AppBar color="default" position="fixed" className={classes.appBar}>
      <Toolbar disableGutters={true} className={classes.toolbar}>
        <Box className={classes.wrapper}>
          <Box className={classes.logoWrapper}>
            <Box color="mainBlue.main">
              <CropSquareIcon fontSize="large" />
            </Box>
            <Typography variant="h5" style={{ paddingTop: "2px" }}>
              Saseburg
            </Typography>
          </Box>
          {/* search */}
          <Hidden smDown>
            <Box className={classes.searchBox}>
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
                className={classes.input}
              />
            </Box>
          </Hidden>
          {/* theme swithcer */}
          <Box className={classes.buttonGroup}>
            <Box color="primary">
              {theme}
            </Box>
            <ThemeSwitcher
              checked={theme === THEME_DARK ? true : false}
              onChange={handleThemeSwitch}
            />
            <IconButton>
              <PersonAddOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
