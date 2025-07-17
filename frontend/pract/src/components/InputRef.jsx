"use client";
import React, { useRef } from "react";

const InputRef = () => {
  const inputRef = useRef(null);
  return (
    <div className="flex flex-col ">
      <h3 className="text-center font-bold text-2xl">use Ref Example </h3>
      <div className="flex flex-row gap-2 m-4 justify-center items-center">
        <input
          type="text"
          ref={inputRef}
          placeholder="type..."
          className="w-xs outline-none border-2 border-blue-400 focus:ring-2 ring-blue-400 rounded-md focus:outline-blue-300 "
        />
        <button
          className="pl-4  btn btn-primary"
          onClick={(e) => {
            console.log("input ref", inputRef);
            console.log('ref value',inputRef.current.value);
            
            inputRef.current.focus();
            inputRef.current.style.color = "red";
            inputRef.current.placeholder = "123";
            inputRef.current.value = "hello";

          }}
        >
          click
        </button>
      </div>

      <h3 className="text-center font-bold text-2xl">
        query selecter Example{" "}
      </h3>
      <div className="flex flex-row gap-2 m-4 justify-center items-center">
        <input
          type="text"
          id="input-btn"
          placeholder="type..."
          className="w-xs outline-none border-2 border-blue-400 focus:ring-2 ring-blue-400 rounded-md focus:outline-blue-300 "
        />
        <button
          className="pl-4  btn btn-primary"
          onClick={(e) => {
            const inputE1 = document.querySelector("#input-btn");
            if (inputE1) {
               console.log("query selector value", inputE1.value);
              inputE1.focus();
              inputE1.style.color = "red";
              inputE1.placeholder = "123";
              inputE1.value = "hello";
            }
          }}
        >
          click
        </button>
      </div>
    </div>
  );
};

export default InputRef;
