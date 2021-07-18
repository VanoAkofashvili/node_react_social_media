import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "services/authService";

const initialState: RegisterState = {
  userRegistered: false,
  error: "",
};

export const registerUserAsync = createAsyncThunk(
  "register/registerUserAsync",
  async (user: IUser) => {
    const response = await authService.registerUser(user);
    console.log(response);
    return response;
  }
);

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.fulfilled, (state) => {
        state.userRegistered = true;
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default registerSlice.reducer