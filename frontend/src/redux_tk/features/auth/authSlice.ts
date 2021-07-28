import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import authService from "services/authService";

// initial state of auth reducer
const initialState: authState = {
  registerLoading: false,
  registerSuccess: false,
  errors: [],
  token: "",
  loginLoading: false,
  loginSuccess: false,
  autoLogin: false
};

// User registrations Thunk
export const registerUserAsync = createAsyncThunk<string[] | number, IUser, {}>(
  "auth/register",
  async (user: IUser, { rejectWithValue }) => {
    try {
      const response = await authService.registerUser(user);
      return response.userId;
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      // it allows return objects
      return rejectWithValue(err.errors);
    }
  }
);

// User Login Thunk
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: ILoginCredentials, { rejectWithValue }) => {
    try {
      const response = await authService.loginUser(credentials);
      return response;
    } catch (err) {
      return rejectWithValue(err.errors);
    }
  }
);

// reducers and action creators for auth store
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleRegisterLoading: (state, action: PayloadAction<boolean>) => {
      state.registerLoading = action.payload;
    },
    toggleError: (state, action) => {
      state.errors = action.payload;
    },
    toggleRegisterSuccess: (state, action: PayloadAction<boolean>) => {
      state.registerSuccess = action.payload;
    },
    autoLogin: (state) => {
      state.autoLogin = true
    },
    setAuthUser: (state, acton) => {
      state.loginSuccess = true;
      state.token = acton.payload
    },
    logOut: (state) => {
      state.loginSuccess = false
    }
  },
  /** registered thunk action creators */
  extraReducers: (builder) => {
    builder
      /** register */
      .addCase(registerUserAsync.pending, (state, action) => {
        console.log("pending", action);
        state.registerLoading = false;
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        console.log("fullfilled");
        state.registerLoading = true;
        state.registerSuccess = true;
      })
      .addCase(registerUserAsync.rejected, (state, {payload}) => {
        //@ts-ignore
        state.errors = payload
      })

      /**login */
      .addCase(loginUser.pending, (state: authState) => {
        state.loginLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.loginLoading = false;
        state.loginSuccess = true;
        state.token = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginLoading = false;
        //@ts-ignore
        state.errors = action.payload;
      });
  },
});

export const { toggleRegisterLoading, toggleError, toggleRegisterSuccess, autoLogin, setAuthUser, logOut } =
  authSlice.actions;

  console.log('authSlice', authSlice.reducer)
export default authSlice.reducer;
