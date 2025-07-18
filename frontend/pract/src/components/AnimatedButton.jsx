import React from "react";

const AnimatedButton = () => {
  return (
    <>
      <div className="relative group w-[150px] m-4 shadow-lg ">
        <div className="absolute rounded-lg bg-blue-400 transform transition-all duration-300 ease-in-out w-[20px] hover:w-full h-full"></div>
        <button className="p-3 relative bg-gray-100 rounded-md text-black group-hover:text-white">
          Button 1
        </button>
      </div>
    </>
  );
};

export default AnimatedButton;
