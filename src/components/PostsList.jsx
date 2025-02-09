import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

import classes from "./PostsList.module.css";

const PostsList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);
  const addPostHandler = (postData) => {
    // if we update the state and new state is based on previous state then we should pass
    // the function in the settter(setPosts) method;
    // setPosts([postData, ...posts]);
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length ? (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.body + Math.random()}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
