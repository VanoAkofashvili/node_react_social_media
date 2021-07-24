import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import postsReducer from '../features/posts/postsSlice'
import { autoLoginMiddleware } from 'redux_tk/middlewares/autoLoginMiddleware'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    homePage: postsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(autoLoginMiddleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch