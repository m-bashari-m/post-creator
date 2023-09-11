import { useAppSelector } from "../../hooks/hooks";
import { postsSelector } from "../../store/slices/postsSlice";

const PostsList = () => {
  const posts = useAppSelector(postsSelector);

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        {/* <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} /> */}
      </p>
      {/* <ReactionButtons post={post} /> */}
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
export default PostsList;
