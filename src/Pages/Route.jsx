import { createBrowserRouter } from "react-router-dom";

import Blogs from "./Blogs.jsx";
import Bookmarks from "./Bookmarks.jsx";
import Home from "./Home.jsx";
import ContentPage from "./ContentPage.jsx";
import Author from "./Author.jsx";
import BlogDetailsPages from "./BlogDetailsPages.jsx";
import App from "../App.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "blogs",
        element: <Blogs />,
        loader: () =>
          fetch("https://dev.to/api/articles?per_page=535&top=7"),
      },

      {
        path: "blogs/:id",
        element: <ContentPage />,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <BlogDetailsPages />,
          },
          {
            path: "author",
            element: <Author />,
          },
        ],
      },

      {
        path: "bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);
