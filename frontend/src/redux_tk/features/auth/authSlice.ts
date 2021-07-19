import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "services/authService";

const initialState: authState = {
  userIsRegistering: false,
  error: null,
  token: "",
  isLoggedIn: false,
  userIsLogging: false,
};

// action creator
export const registerUserAsync = createAsyncThunk(
    "register/registerUserAsync",
    async (user: IUser) => {
      return await authService.registerUser(user);
    }
  );

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials: ILoginCredentials) => {
  const response = await authService.loginUser(credentials)
  console.log(response)
  return response
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerFinished: (state) => {
      state.userIsRegistering = false;
    },
    toggleError: (state, action) => {
        state.error = action.payload
    }
  },
  /** registered thunk action creators */
  extraReducers: (builder) => {
    builder
      /** register */
      .addCase(registerUserAsync.pending, (state) => {
        state.userIsRegistering = false
      })
      .addCase(registerUserAsync.fulfilled, (state) => {
        state.userIsRegistering = true;
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })

      /**login */
      .addCase(loginUser.pending, (state: authState) => {
        state.userIsLogging = true
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.userIsLogging = false
        state.userIsLogging = true
        state.token = action.payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.userIsLogging = false
        state.error = action.error.message
      })
  },
});

export const {registerFinished, toggleError} = authSlice.actions
export default authSlice.reducer
