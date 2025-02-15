import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";

const Posts = () => {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
};

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}

// data returned from the above function will be accessable in route and also in any nested element;
