import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-116px)]">
      <ScaleLoader color="#36d7b7" height={100} width={4} />
    </div>
  );
};

export default Loader;