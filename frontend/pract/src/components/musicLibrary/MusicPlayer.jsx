"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  FaHeart,
  FaStepBackward,
  FaBackward,
  FaPause,
  FaPlay,
  FaForward,
  FaStepForward,
} from "react-icons/fa";
const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const [playbackRate, setPlaybackRate] = useState(1);
  const [like, setLike] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  const rewindTenSec = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = Math.max(0, audio.currentTime - 10);
    }
  };
  const skipTenSec = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = Math.min(duration, audio.currentTime + 10);
    }
  };
  const formatTime = (time) => {
    return isNaN(time)
      ? "0:00"
      : `${Math.floor(time / 60)}:${("0" + Math.floor(time % 60)).slice(-2)}`;
  };

  const changeSpeed = () => {
    const nextRate = playbackRate > 2 ? 1 : playbackRate + 0.5;
    setPlaybackRate(nextRate);
    audioRef.current.playbackRate = nextRate;
  };
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleTimeUpdate = () => setProgress(audio.currentTime);
      const handleDurationChange = () => setDuration(audio.duration);

      
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("canplaythrough", handleDurationChange);
      // audio.addEventListener("loadedmetadata", handleDurationChange);
      if (audio.readyState >= 1 && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("canplaythrough", handleDurationChange);
        // audio.removeEventListener("loadedmetadata", handleDurationChange);
      };
    }
  }, []);
  return (
    <div className=" min-h-screen flex items-center justify-center bg-amber-50">
      <div className=" flex flex-col items-center justify-center bg-white space-y-4  rounded-md shadow-md p-6">
        {/* audio tag */}
        <span className="w-0">
          <audio ref={audioRef} src={"/audio/1.mp3"} preload="metadata" />
        </span>
        <div className="flex items-center justify-center space-x-4">
          <img
            src="https://img.freepik.com/free-psd/square-flyer-template-maximalist-business_23-2148524497.jpg"
            alt=""
            className="w-20 h-20 rounded-lg object-cover"
          />
          {/* music info */}
          <div className=" flex flex-col spacye-y-1 font-semibold">
            <p className="text-cyan-500 text-sm">Track: 01</p>
            <h2 className="text-gray-400 text-sm truncate">
              SoundHelix Example Track
            </h2>
            <p className="text-slate-900 dark:text-slate-50 text-lg">
              Spotisimo
            </p>
          </div>
        </div>
        {/* progressbar  */}
        <div className="space-y-2 w-full">
          <div className="relative h-2 bg-gray-300 overflow-hidden rounded-full ">
            <div
              className="bg-cyan-500 h-full"
              style={{
                width: `${
                  duration ? Math.min((progress / duration) * 100, 100) : 0
                }%`,
              }}
            ></div>
          </div>
        </div>
        {/* duration */}
        <div className="flex justify-between w-full  text-sm font-medium ">
          <div className="text-cyan-500">{formatTime(progress)}</div>
          <div className="text-cyan-500">{formatTime(duration)}</div>
        </div>
        {/* controls */}
        <div className="flex items-center px-6 py-4 mt-3 bg-gray-300 text-slate-500 rounded-b-xl w-full ">
          <div className="flex items-center justify-evenly gap-2">
            {/* heart */}
            <button>
              <FaHeart
                size={24}
                style={{ color: `${like ? "red" : "gray"}` }}
                onClick={() => setLike((prev) => !prev)}
              />
            </button>
            {/* rewind button  */}
            <button>
              <FaStepBackward size={24} />
            </button>
            <button onClick={rewindTenSec}>
              <FaBackward size={24} />
            </button>
            {/* play button */}
            <button
              onClick={togglePlay}
              className="flex justify-center items-center bg-white text-gray-600  w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md "
            >
              {isPlaying ? <FaPause size={30} /> : <FaPlay size={30} />}
            </button>
            {/* forward button  */}
            <button onClick={skipTenSec}>
              <FaForward size={24} />
            </button>
            <button>
              <FaStepForward size={24} />
            </button>
            <div className="flex items-center justify-center bg-white w-10 h-8 rounded-md">
              <button onClick={changeSpeed}>{playbackRate}x</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
