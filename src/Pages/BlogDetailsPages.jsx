import React from "react";
import { useLoaderData } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const BlogDetailsPages = () => {
  const data = useLoaderData();

  return (
    <div className="border p-5 rounded-md bg-gray-800 text-gray-100 mt-2.5">
      <div className="pt-40">
        <img src={data.cover_image} alt="" />
      </div>

      <div className="flex gap-2 mt-4 flex-wrap">
        {data.tag_list
          ?.toString()
          .split(" ")
          .map((tag, index) => (
            <p key={index} className="px-3 py-1 rounded bg-gray-700">
              #{tag}
            </p>
          ))}
      </div>

      <h1 className="text-2xl font-bold mt-4">{data.title}</h1>
      <p className="mt-2 text-gray-300">{data.description}</p>

      <article className="prose prose-invert max-w-none mt-6">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {data.body_html}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default BlogDetailsPages;
