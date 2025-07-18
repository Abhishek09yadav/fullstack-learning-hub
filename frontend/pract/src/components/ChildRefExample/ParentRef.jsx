"use client"
import React, { useRef } from 'react'
import ChildRef from './ChildRef';

const ParentRef = () => {
  const inputRef = useRef();

  return (
    <div>
      <h3 className="text-center font-bold text-2xl">use Ref Example </h3>
      <div className="flex flex-row gap-2 m-4 justify-center items-center">
        <ChildRef ref={inputRef}/>
        <button
          className="pl-4  btn btn-primary"
          onClick={(e) => {
            console.log("input ref", inputRef);
            console.log("ref value", inputRef.current.value);

            inputRef.current.focus();
            inputRef.current.style.color = "red";
            inputRef.current.placeholder = "123";
            inputRef.current.value = "hello";
          }}
        >
          click
        </button>
      </div>
    </div>
  );
}

export default ParentRef
