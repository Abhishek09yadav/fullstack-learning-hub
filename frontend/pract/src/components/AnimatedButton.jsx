import React from "react";
import { BsSendFill } from "react-icons/bs";

const AnimatedButton = () => {
  return (
    <div className="min-h-screen m-4 flex flex-col items-center justify-center">
      <button className="relative p-3 w-48 h-12 group shadow-md rounded-md text-black text-center cursor-pointer">
        <span className="absolute inset-0 rounded-sm flex items-center justify-center  text-white bg-blue-400 transform transition-all duration-300 ease-in-out w-[30px] group-hover:w-full h-full ">
          <BsSendFill className="group-hover:translate-x-16 " />
        </span>
        <span className="relative group-hover:text-white z-10">Button 1 </span>
      </button>
      
    </div>
  );
};

export default AnimatedButton;
