// the name of the function should start with an uppercase character.

// importing the style sheet(module)
import classes from "./Post.module.css";

const Post = ({ author, body } = props) => {
  return (
    <div
      // style={{
      //   background: "#000fff",
      //   boxShadow: "0 0 10px #000",
      //   marginBottom: "8px",
      // }}\
      className={classes.post}
    >
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </div>
  );
};

export default Post;
