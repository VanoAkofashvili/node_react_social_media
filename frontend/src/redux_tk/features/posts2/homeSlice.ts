import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import postsServise from "services/postServices";
import { AppThunk } from "redux_tk/app/store";

const initialState: homePageState = {
  posts: [],
};

console.log('getAll Posts in Slice')
// get all posts
export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  const response = await postsServise.getAll();
  return response;
});


export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    removePosts: (state) => {
      state.posts = []
    },
    getPosts: (state, action) => {
      // state.posts = 
      console.log(action.payload)
    }
  },
  extraReducers: {
      [getAllPosts.fulfilled.type]: (state, action) => {
          state.posts = action.payload
      },
      [getAllPosts.rejected.type]: (state, action) => {
        console.log(action.payload)
        console.log('error while fetching posts')
      }
  }
});


console.log('postsSlice', postsSlice.reducer);

export const { getPosts} = postsSlice.actions
export default postsSlice.reducer
// export const getAllPosts = (): AppThunk => async( dispatch:any) => {
//   try {
//     const response = await postsServise.getAll()
//     return dispatch(getPosts(response))
//   } catch {
//     console.log('error fetching posts')
//   }
// }
