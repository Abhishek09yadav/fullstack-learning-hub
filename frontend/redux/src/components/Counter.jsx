"use client";
import { decrement, increment } from "@/store/features/counterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log("count", count);
  const handleIncrement = () => {
    dispatch(increment())
  };
  const handleDecrement = () => {
    dispatch(decrement())
  };
  return (
    <div className="flex flex-row container  justify-center items-center gap-2 mt-3">
      <button className="bg-blue-500 p-8 rounded-md" onClick={handleIncrement}>
        +
      </button>
        <div className="border bg-gray-200 rounded-md p-6 " >Count: {count}</div>
      <button className="bg-blue-500 p-8 rounded-md" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
};

export default Counter;
