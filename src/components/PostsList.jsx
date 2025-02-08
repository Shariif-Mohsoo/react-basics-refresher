import Post from "./Post";
import NewPost from "./NewPost";

import classes from "./PostsList.module.css";

const PostsList = () => {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Mohsin" body="React.js is awesome" />
        <Post author="Jawad" body="React.js is just wow" />
      </ul>
    </>
  );
};

export default PostsList;
