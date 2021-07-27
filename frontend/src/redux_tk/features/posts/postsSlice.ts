import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postsServise from "services/postServices";

const initialState: homePageState = {
  posts: [],
};

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  const response = await postsServise.getAll();
  return response.posts;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    removePosts: (state) => {
      state.posts = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      console.log("action");
      state.posts = action.payload;
    });
    builder.addCase(getAllPosts.rejected, (state, action) => {
      console.log(action.payload);
      console.log("error while fetching posts");
    });
  },
});

// export const { removePosts } = postsSlice.actions
export default postsSlice.reducer;
