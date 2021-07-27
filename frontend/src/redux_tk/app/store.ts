import { configureStore } from '@reduxjs/toolkit'
import authReducer from 'redux_tk/features/auth/authSlice'
import postsReducer from 'redux_tk/features/posts/postsSlice'
import { autoLoginMiddleware } from 'redux_tk/middlewares/autoLoginMiddleware'

const reducer = {
  auth: authReducer,
  posts: postsReducer,
}
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(autoLoginMiddleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch