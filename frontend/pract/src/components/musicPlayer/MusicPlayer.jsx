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

  const audioSrc = "/audio/1.mp3";

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
  const formatTime =(time)=>{
    isNaN(time)? '0:00' : `${Math.floor(time/60)}:${('0'+ Math.floor(time % 60 )).slice(-2)}`
  }
  const change
  return <div></div>;
};

export default MusicPlayer;
