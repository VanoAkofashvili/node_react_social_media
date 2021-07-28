import { createAsyncThunk } from "@reduxjs/toolkit";
import postsServise from "services/postServices";

console.log('getAllPosts')
// get all posts
const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  const response = await postsServise.getAll();
  return response;
});

console.log('getAllPosts in file', getAllPosts)
export const homeReducers = { getAllPosts}