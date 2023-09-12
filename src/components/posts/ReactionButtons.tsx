import React from "react";
import { useAppDispatch } from "../../hooks/hooks";
import {
  Post,
  StringReactions,
  reactionAdded,
} from "../../store/slices/postsSlice";

const reactionEmoji = {
  thumbUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

interface reactioButtonsProps {
  post: Post;
}

const ReactionButtons: React.FC<reactioButtonsProps> = ({ post }) => {
  const dispatch = useAppDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(
            reactionAdded({
              postId: post.id,
              reaction: name as StringReactions,
            })
          )
        }
      >
        {emoji} {post.reactions[name as StringReactions]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
