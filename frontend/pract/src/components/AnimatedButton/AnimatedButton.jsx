import React from "react";
import { BsSendFill } from "react-icons/bs";
import style from "./AnimatedButton.module.css";

const AnimatedButton = () => {
  return (
    <div className="min-h-screen m-4 flex flex-col items-center justify-center">
      
      {/* button 1 */}
      <button className="relative p-3 w-48 h-12 group shadow-md rounded-md text-black text-center cursor-pointer">
        <span className="absolute inset-0 rounded-sm flex items-center justify-center  text-white bg-blue-400 transform transition-all duration-300 ease-in-out w-[30px] group-hover:w-full h-full ">
          <BsSendFill className="group-hover:translate-x-16 group-hover:animate-bounce " />
        </span>
        <span className="relative group-hover:text-white z-10">Button 1 </span>
      </button>


      {/* button 2  */}
      <div className="mt-20 flex justify-center items-center font-semibold shadow-lg p-3 border border-zinc-400 rounded-md">
        <button
          className={`${style.hoverUnderline}  relative inline cursor-pointer text-2xl `}
        >
          Hover me
        </button>
      </div>
    </div>
  );
};

export default AnimatedButton;
