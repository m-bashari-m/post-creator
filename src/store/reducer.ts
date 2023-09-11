import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";

export const rootReducer = combineReducers({
  posts: postsReducer,
});
