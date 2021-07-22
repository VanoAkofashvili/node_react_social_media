import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import postsServise from "services/postServices";

const initialState = {
  posts: [],
};

const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  const response = await postsServise.getAll();
  return response;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(getAllPosts.fulfilled, (state, action) => {
          state.posts = action.payload
      })
  },
});

export default postsSlice.reducer;
