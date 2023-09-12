import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { usersSelector } from "../../store/slices/userSlice";

interface postAuthorProps {
  userId?: string;
}

const PostAuthor: React.FC<postAuthorProps> = ({ userId }) => {
  const users = useAppSelector(usersSelector);

  const author = users.find((user) => user.id === userId);

  return <span>by {author ? author.name : "Unknown author"}</span>;
};

export default PostAuthor;
