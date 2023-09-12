import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { sub } from "date-fns";

type Reactions = {
  thumbUp: number;
  wow: number;
  heart: number;
  rocket: number;
  coffee: number;
};

export type StringReactions = "thumbUp" | "wow" | "rocket" | "heart" | "coffee";

export type Post = {
  id: string;
  title: string;
  content: string;
  date: string;
  userId?: string;
  reactions: Reactions;
};

const initialReactions: Reactions = {
  thumbUp: 0,
  wow: 0,
  rocket: 0,
  heart: 0,
  coffee: 0,
};

export type PostsSliceType = Post[];

const initialState: PostsSliceType = [
  {
    id: "1",
    title: "Learning redux toolkit",
    content: "I've heard good things about it.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: initialReactions,
  },
  {
    id: "2",
    title: "Today's weather",
    content: "if the weather's good we can go for a walk",
    userId: "2",
    date: sub(new Date(), { minutes: 2 }).toISOString(),
    reactions: initialReactions,
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
            reactions: initialReactions,
          },
        };
      },
    },

    reactionAdded: (
      state,
      action: PayloadAction<{
        postId: string;
        reaction: StringReactions;
      }>
    ) => {
      const { postId, reaction } = action.payload;
      const exitingPost = state.find((post) => post.id === postId);
      if (exitingPost) {
        exitingPost.reactions[reaction]++;
      }
    },
  },
});

export const postsSelector = (state: RootState) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
