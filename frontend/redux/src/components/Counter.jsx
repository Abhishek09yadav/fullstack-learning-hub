"use client";
import { changeAmountInCounter, decrement, increment, resetCounter } from "@/store/features/counterSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const [amount, SetAmount] = useState(null);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // console.log("count", count);
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(resetCounter());
  };
  const handleChangeAmount = () => {
    dispatch(changeAmountInCounter(amount))
    SetAmount(0)
  };
  return (
    <div className="flex flex-col container  justify-center items-center gap-2 mt-3">
      <button
        className="bg-green-500 p-8 rounded-md"
        onClick={handleIncrement}
      >
        +
      </button>
      <div className="border bg-gray-200 rounded-md p-6 ">Count: {count}</div>
      <button
        className="bg-green-500 p-8 rounded-md"
        onClick={handleDecrement}
      >
        -
      </button>
      <button
        className="bg-blue-500 px-8 py-3 rounded-md"
        onClick={handleReset}
      >
        Reset
      </button>
      <input
        className="border-2"
        placeholder="enter amount to change"
        type="number"
        value={amount}
        onChange={(e) => SetAmount(e.target.value)}
      />
      <button
        className="bg-blue-500 px-8 py-3 rounded-md"
        onClick={handleChangeAmount}
      >
        Submit
      </button>
    </div>
  );
};

export default Counter;
