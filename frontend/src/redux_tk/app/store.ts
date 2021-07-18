import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import notesReducer from '../features/notes/notesSlice'
import registerReducer from '../features/register/registerSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // justCOunt: counterReducer,
    // notes: notesReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch