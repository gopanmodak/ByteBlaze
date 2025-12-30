import { useLoaderData, Link, Outlet } from "react-router-dom";

import ErrorImage from "../assets/images/404 (1).jpg";
import { useState } from "react";

import { MdBookmarkAdd } from "react-icons/md";
import { saveBlogsToDb } from "../utlits";



const ContentPage = () => {

	const [tab,setTab]=useState('true')
  const blog = useLoaderData();

  if (!blog) return <p className="pt-20 text-center">Blog not found</p>;


  const handleOnClicked=(blog)=>{
    
    saveBlogsToDb(blog)
  }

  return (
    <div className="max-w-2xl px-6 py-16 mx-auto space-y-12 p-3">
      <article className="space-y-8 bg-gray-800 text-gray-50 p-5">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl p-3">
            {blog.title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
            <div className="flex items-center md:space-x-2">
              
              <p className="text-sm">
                {blog.reading_time_minutes} min read •{" "}
                {new Date(blog.published_at).toDateString()}
              </p>
            </div>
            <p className="md:ml-auto mt-3 text-sm md:mt-0">
              {blog.comments_count} Comments • {blog.public_reactions_count}{" "}
              views
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap bg-gray-800 text-gray-100">
            <Link
              to=""
			  onClick={()=>setTab(0)}
              className={`flex cursor-pointer items-center px-5 py-3 space-x-2 ${
                tab === 0 ? 'border border-b-0' : 'border-b'
              }  `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Content</span>
            </Link>
            <Link
              to="author"
               onClick={()=>setTab(1)}
              className={`flex cursor-pointer items-center px-5 py-3 space-x-2 ${
                tab === 1 ? 'border border-b-0' : 'border-b'
              }  `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Author</span>
            </Link>
     <Link>
  <div
    className="flex items-center justify-center px-5 py-3 space-x-2
               rounded-full bg-white text-indigo-600
               hover:bg-indigo-600 hover:text-white
               transition-all duration-300 ease-in-out
               shadow hover:shadow-lg cursor-pointer mx-5" onClick={()=>handleOnClicked(blog)}
  >
    <MdBookmarkAdd size={30} />
  </div>
</Link>

          </div>

<Outlet/>

        </div>
      </article>
    </div>
  );
};

export default ContentPage;
