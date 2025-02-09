import { useState } from "react";

import classes from "./NewPost.module.css";

const NewPost = (props) => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const bodyChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredAuthor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    props.onAddPost(postData);
    setEnteredAuthor("");
    setEnteredBody("");
    props.onCancel();
    // console.log(postData);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          value={enteredBody}
          onChange={bodyChangeHandler}
          id="body"
          required
          rows={3}
        />
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredAuthor}
          onChange={authorChangeHandler}
          type="text"
          id="name"
          required
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
};

export default NewPost;
