import { createRoot } from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./routes/RootLayout";
import Posts, { loader as postsLoader } from "./routes/Posts";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import PostDetails, { loader as postDetailsLoader } from "./routes/PostDetails";

import "./index.css";

// route configration
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction },
          {
            path: "/:postId",
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// main entry point of entire application is this file.
