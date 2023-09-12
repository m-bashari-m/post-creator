import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { sub } from "date-fns";

type Post = {
  id: string;
  title: string;
  content: string;
  date: string;
  userId?: string;
};

export type PostsSliceType = Post[];

const initialState: PostsSliceType = [
  {
    id: "1",
    title: "Learning redux toolkit",
    content: "I've heard good things about it.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: "2",
    title: "Today's weather",
    content: "if the weather's good we can go for a walk",
    userId: "2",
    date: sub(new Date(), { minutes: 2 }).toISOString(),
  },
];

const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action: PayloadAction<Post>) => {
        state.push(action.payload);
      },
      prepare(title: string, content: string, userId: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
          },
        };
      },
    },
  },
});

export const postsSelector = (state: RootState) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
