import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import { getBlogs } from '../utlits';

const Bookmarks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedBlogs = getBlogs();
    setData(storedBlogs);
  }, []);

  if (data.length === 0) {
    return (
      <div className="text-center mt-20 text-gray-500">
        No bookmarks yet. Start adding some blogs!
      </div>
    );
  }

  return (
    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
      {data.map((item) => (
        <Blog data={item} key={item.id} />
      ))}
    </div>
  );
};

export default Bookmarks;
