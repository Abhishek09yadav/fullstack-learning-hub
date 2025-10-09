"use client";
import React, { useEffect, useState } from "react";

const Debounce = () => {
  const [input, setInput] = useState(null);
  useEffect(()=>{
    const timeoutId = setTimeout(() =>{
      console.log("api called",input);
    },[3500])
    return () => clearTimeout(timeoutId)
  },[input])
  return (
    <div className="min-h-screen flex flex-col bg-amber-50 justify-center items-center m-2">
      <h1 className="text-3xl font-extrabold text-blue-500">
        Enter Query here
      </h1>
      <input
        className="w-full md:w-1/4 cursor-pointer border rounded-md mt-4 boder-2 foucs:ring-2 p-2 "
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
      />
    </div>
  );
};

export default Debounce;
