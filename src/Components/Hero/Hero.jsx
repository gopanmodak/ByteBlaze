import React from "react";
import { Link } from "react-router-dom";
import svgImage from "../../assets/images/wave.svg";

const Hero = () => {
  return (
    <div className="min-h-screen flex pt-20 flex-col gap-5 items-center justify-center bg-zinc-100 rounded-lg shadow-lg">
      
      <h1 className="text-black text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center font-extrabold mb-8">
        Welcome to{" "}
        <span className="font-bold bg-linear-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
          ByteBlaze
        </span>
      </h1>

      <p className="text-center text-xl max-w-3xl mx-auto text-black mb-10">
        ByteBlaze is the bridge between the complex world of technology and the
        curious minds eager to understand it.
      </p>

      <div className="flex gap-6">
        {/* Blogs */}
        <Link to="/blogs" className="relative inline-block px-4 py-2 font-medium group">
          <span className="absolute inset-0 w-full h-full transition duration-200 transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0" />
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black" />
          <span className="relative text-black group-hover:text-white">
            Blogs
          </span>
        </Link>

        {/* Bookmarks */}
        <Link to="/bookmarks" className="relative inline-block px-4 py-2 font-medium group">
          <span className="absolute inset-0 w-full h-full transition duration-200 transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0" />
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black" />
          <span className="relative text-black group-hover:text-white">
            Bookmarks
          </span>
        </Link>
      </div>

      <div className="relative w-full mt-12">
        <img src={svgImage} alt="wave" className="mx-auto w-full max-w-5xl" />
      </div>
    </div>
  );
};

export default Hero;
