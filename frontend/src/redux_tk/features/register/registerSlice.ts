import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import authService from "services/authService";

const initialState: RegisterState = {
  userRegistered: false,
  error: null,
};

// action creator
export const registerUserAsync = createAsyncThunk(
  "register/registerUserAsync",
  async (user: IUser) => {
    const response = await authService.registerUser(user);
    return response;
  }
);

// reducer
export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    toggleRegister: (state, action: PayloadAction<boolean>) => {
      state.userRegistered = action.payload
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

export const { toggleRegister } = registerSlice.actions
export default registerSlice.reducer