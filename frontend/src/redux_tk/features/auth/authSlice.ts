import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "services/authService";

const initialState: authState = {
  registerLoading: false,
  registerSuccess: false,
  error: null,
  token: "",
  loginLoading: false,
  loginSuccess: false,
};

// action creator
export const registerUserAsync = createAsyncThunk(
  "auth/registerUserAsync",
  async (user: IUser) => {
    const response = await authService.registerUser(user);
    return response;
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: ILoginCredentials) => {
    const response = await authService.loginUser(credentials);
    return response;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleRegisterLoading: (state, action: PayloadAction<boolean>) => {
      state.registerLoading = action.payload;
    },
    toggleError: (state, action) => {
      state.error = action.payload;
    },
    toggleRegisterSuccess: (state, action: PayloadAction<boolean>) => {
      state.registerSuccess = action.payload;
    },
  },
  /** registered thunk action creators */
  extraReducers: (builder) => {
    builder
      /** register */
      .addCase(registerUserAsync.pending, (state) => {
        state.registerLoading = false;
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.registerLoading = true;
        state.registerSuccess = true;
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })

      /**login */
      .addCase(loginUser.pending, (state: authState) => {
        state.loginLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<string>) => {
        console.log('fulliled', action)

        state.loginLoading = false;
        state.loginSuccess = true;
        state.token = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { toggleRegisterLoading, toggleError, toggleRegisterSuccess } =
  authSlice.actions;
export default authSlice.reducer;
