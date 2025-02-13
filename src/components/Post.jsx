// the name of the function should start with an uppercase character.

import { Link } from "react-router-dom";

// importing the style sheet(module)
import classes from "./Post.module.css";

const Post = ({ id, author, body } = props) => {
  return (
    <li
      // style={{
      //   background: "#000fff",
      //   boxShadow: "0 0 10px #000",
      //   marginBottom: "8px",
      // }}\
      className={classes.post}
    >
      <Link to={`/${id}`}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
};

export default Post;
