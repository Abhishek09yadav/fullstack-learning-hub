"use client";
import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const [pause, setPause] = useState(true);

  useEffect(() => {
    if (!pause) {
      const time = setInterval(() => {
        setTimer((prev) => prev + 10);
      }, 10);
      return () => clearInterval(time);
    }
  }, [pause]);
  function formatTime(time){
    const minutes  = Math.floor((time/60000)% 60)
    const seconds = Math.floor((time/1000)%60)
    const milliseconds = Math.floor((time % 1000)/10)
    return <span>{`${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}:${String(milliseconds).padStart(2,"0")}`}</span>;
    }
  return (
    <div className="min-h-screen flex justify-center items-center bg-amber-50">
      <div className="  px-28 py-20  flex flex-col justify-center items-center space-y-4  bg-amber-300/70 rounded-lg">
        <p className="font-bold text-7xl text-slate-500">{formatTime(timer)}</p>
        <div className="flex flex-row gap-3 ">
          {" "}
          <button
            className="btn btn-primary"
            onClick={() => setPause((prev) => !prev)}
          >{`${pause === true ? "Start" : "Pause"}`}</button>
          <button
            className="btn btn-primary "
            onClick={() => {
              setTimer(0);
              setPause(true);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
