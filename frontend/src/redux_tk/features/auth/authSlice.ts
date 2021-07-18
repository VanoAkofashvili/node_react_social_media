import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "services/authService";

const initialState: authState = {
  userRegistered: false,
  error: null,
  token: "",
};

// action creator
export const registerUserAsync = createAsyncThunk(
    "register/registerUserAsync",
    async (user: IUser) => {
      const response = await authService.registerUser(user);
      return response;
    }
  );

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleRegister: (state, action: PayloadAction<boolean>) => {
      state.userRegistered = action.payload;
    },
    toggleError: (state, action) => {
        state.error = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.userRegistered = false
      })
      .addCase(registerUserAsync.fulfilled, (state) => {
        state.userRegistered = true;
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const {toggleRegister, toggleError} = authSlice.actions
export default authSlice.reducer
