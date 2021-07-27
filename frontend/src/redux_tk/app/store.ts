import { configureStore } from '@reduxjs/toolkit'
import authSlice from 'redux_tk/features/auth/authSlice'
import postsSlice from 'redux_tk/features/posts/postsSlice'
import testSlice from 'redux_tk/features/test/testSlice'
import { autoLoginMiddleware } from 'redux_tk/middlewares/autoLoginMiddleware'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    homePage: postsSlice,
    test: testSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(autoLoginMiddleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch