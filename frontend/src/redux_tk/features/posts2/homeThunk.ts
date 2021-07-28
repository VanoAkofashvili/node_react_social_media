import { createAsyncThunk } from "@reduxjs/toolkit";
import postsServise from "services/postServices";

// get all posts
export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  const response = await postsServise.getAll();
  return response;
});
