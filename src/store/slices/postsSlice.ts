import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Post = {
  id: string;
  title: string;
  content: string;
};

export type PostsSliceType = Post[];

const initialState: PostsSliceType = [
  {
    id: "1",
    title: "Learning redux toolkit",
    content: "I've heard good things about it.",
  },
  {
    id: "2",
    title: "Today's weather",
    content: "if the weather's good we can go for a walk",
  },
];

const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded: (state, action: PayloadAction<Post>) => {
      state.push(action.payload);
    },
  },
});

export const postsSelector = (state: RootState) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
