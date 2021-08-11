import { createSlice } from "@reduxjs/toolkit";
import { SM_THEME } from "utils/const/constants";

const initialState: displayState = {
  theme: localStorage.getItem(SM_THEME),
};

export const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      localStorage.setItem(SM_THEME, action.payload);
      state.theme = action.payload;
    },
  },
});

export const { reducer: displayReducer } = displaySlice;
export const { changeTheme } = displaySlice.actions;
