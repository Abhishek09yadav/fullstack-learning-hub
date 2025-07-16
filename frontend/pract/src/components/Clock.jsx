"use client";
import React, { useEffect, useState } from "react";
const Clock = () => {
  const [color, setColor] = useState("orange");
  const [time, setTime] = useState();

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);
  return (
    <div className={`flex flex-col items-center justify-center my-12`}>
      <div className="">
        <select onChange={(e) => setColor(e.target.value)}>
          <option value="orange">orange</option>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
        </select>
      </div>
      <div
        className={`w-1/2 rounded-md text-white p-4 `}
        style={{ backgroundColor: `${color}` }}
      >
        {time}
      </div>
    </div>
  );
};

export default Clock;
