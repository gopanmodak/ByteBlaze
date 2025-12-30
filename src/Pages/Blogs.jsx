import React from "react";
import { Outlet, useLoaderData, Link, useNavigation } from "react-router-dom";
import Blog from "./Blog";
import Loader from '../Components/Loader/loader'

const Blogs = () => {
  const data = useLoaderData();
  const navigation = useNavigation();

  
  if (navigation.state === "loading") return <Loader />;

  if (!data || data.length === 0) {
    return <p className="text-center pt-20">No blogs found</p>;
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container max-w-6xl p-6 mx-auto space-y-6">
        <Link
          to={`/blogs/${data[0].id}`}
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group lg:grid lg:grid-cols-12"
        >
          <img
            src={data[0].cover_image}
            alt={data[0].title}
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl hover:underline">
              {data[0].title}
            </h3>
            <span className="text-xs text-gray-500">
              {new Date(data[0].published_at).toDateString()}
            </span>
            <p className="text-gray-600">{data[0].description}</p>
          </div>
        </Link>
      </div>

      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
        {data.slice(1).map((item) => (
          <Blog data={item} key={item.id} />
        ))}
      </div>

      <Outlet />
    </div>
  );
};

export default Blogs;