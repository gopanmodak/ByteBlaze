import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from "./Pages/Blogs.jsx";
import Bookmarks from "./Pages/Bookmarks";
import Home from "./Pages/Home.jsx";
import ContentPage from "./Pages/ContentPage.jsx";
import Author from "./Pages/Author.jsx";
import BlogDetailsPages from "./Pages/BlogDetailsPages.jsx";
import toast, { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blogs",
        element: <Blogs />,
        loader: () => fetch("https://dev.to/api/articles?per_page=535&top=7"),
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
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
          { path: "author",  loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
           
            element: <Author /> },
        ],
      },
      {
        path: "bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster/>
  </StrictMode>
);
