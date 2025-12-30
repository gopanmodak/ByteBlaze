import React from "react";
import { Link } from "react-router-dom";
import ErrorImage from "../assets/images/404 (1).jpg";

const Blog = ({ data }) => {
  const {
    id,
    title,
    description,
    cover_image,
    published_at,
  } = data;

  return (
    <div className="border border-amber-600 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <Link
        to={`/blogs/${id}`}
        className="group block bg-gray-50 h-full"
      >
      
        <img
          className="object-cover w-full h-64 sm:h-80"
          src={cover_image || ErrorImage}
          alt={title || "Blog cover image"}
        />

        {/* Content */}
        <div className="p-6 space-y-2">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:underline line-clamp-2">
            {title || "Untitled Blog"}
          </h3>

          <span className="text-xs text-gray-500">
            {published_at
              ? new Date(published_at).toDateString()
              : "Date unavailable"}
          </span>

          <p className="text-gray-600 text-sm line-clamp-3">
            {description || "No description available."}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
