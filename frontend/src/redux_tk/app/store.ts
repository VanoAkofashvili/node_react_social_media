import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "redux_tk/features/auth/authSlice";
import  postsReducer  from "redux_tk/features/posts2/homeSlice";
import { autoLoginMiddleware } from "redux_tk/middlewares/autoLoginMiddleware";

console.log('store')

console.log('authReducer', authReducer)
console.log('postsReducer', postsReducer);

const reducer = {
  posts: postsReducer,
  auth: authReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(autoLoginMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
