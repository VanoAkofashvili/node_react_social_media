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
import { SM_THEME, THEME_DARK, THEME_LIGHT } from "utils/const/constants";
import useStyles from "./styles";

export default function Header() {
  const [isThemeLight, setIsThemeLight] = React.useState(
    localStorage.getItem(SM_THEME) === THEME_LIGHT ? false : true
  );
  const classes = useStyles();

  const handleThemeSwitch = () => {
    if (isThemeLight) {
      localStorage.setItem(SM_THEME, THEME_LIGHT);
    } else {
      localStorage.setItem(SM_THEME, THEME_DARK);
    }
    setIsThemeLight(!isThemeLight);
    window.location.reload();
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
            {!isThemeLight ? "darkMode" : "lightMode"}
            <ThemeSwitcher
              checked={isThemeLight}
              onChange={handleThemeSwitch}
              name="checkedC"
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
