import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="post-wrapper">
      <h1>--- POSTS ---</h1>
      <div className="posts">
        {posts.map((p) => (
          <Post post={p} />
        ))}
      </div>
    </div>
  );
}
