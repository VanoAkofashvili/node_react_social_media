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

import {
  contentWrapperWidth,
  sideWrapperWidth,
} from "../../../utils/const/wrappers";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import ThemeSwitcher from "components/atoms/Swithes/ThemeSwitcher";
import { SM_THEME, THEME_DARK, THEME_LIGHT } from "utils/const/constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
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
      width: contentWrapperWidth,
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
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
    },
  })
);

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
      <Toolbar disableGutters={true}>
        <Box display="flex" className={classes.logo}>
          <CropSquareIcon fontSize="large" className={classes.logoIcon} />
          <Typography variant="h5" style={{ paddingTop: "2px" }}>
            Saseburg
          </Typography>
        </Box>
        <Hidden smDown>
          <div className={classes.searchBox}>
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
          </div>
        </Hidden>
        <div className={classes.buttonGroup}>
          {!isThemeLight ? "darkMode" : "lightMode"}
          <ThemeSwitcher
            checked={isThemeLight}
            onChange={handleThemeSwitch}
            name="checkedC"
          />
          <IconButton>
            <PersonAddOutlinedIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
