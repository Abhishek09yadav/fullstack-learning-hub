"use client";
import React, { useRef } from "react";

const InputRef = () => {
  const inputRef = useRef(null);
  return (
    <div className="flex flex-row gap-2 m-4">
      <input
        type="text"
        ref={inputRef}
        placeholder="type..."
        className="w-xs outline-none border-2 border-blue-400 focus:ring-2 ring-blue-400 rounded-md focus:outline-blue-300 "
      />
      <button className="btn btn-primary" onClick={(e) => {
        console.log("input ref" , inputRef)
        inputRef.current.focus();
        inputRef.current.style.color='red';
      }}>
        focus
      </button>
    </div>
  );
};

export default InputRef;
