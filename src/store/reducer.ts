import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";
import userReducer from "./slices/userSlice";

export const rootReducer = combineReducers({
  posts: postsReducer,
  users: userReducer,
});
