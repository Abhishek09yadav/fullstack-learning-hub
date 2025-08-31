"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 justify-center items-center md:grid-cols-5 gap-2 m-4">
      <button className="btn btn-primary" onClick={() => router.push("/check")}>
        Test button
      </button>
      <button className="btn btn-primary" onClick={() => router.push("/check")}>
        checkbox
      </button>
      <button className="btn btn-primary" onClick={() => router.push("/timer")}>
        Timer
      </button>
      <button
        className="btn btn-primary"
        onClick={() => router.push("/nestedobj")}
      >
        Nested Obj
      </button>
      <button
        className="btn btn-primary"
        onClick={() => router.push("/inputRef")}
      >
        Ref vs query
      </button>
      <button
        className="btn btn-primary"
        onClick={() => router.push("/childref")}
      >
        Ref in Child
      </button>
      <button
        className="btn btn-primary"
        onClick={() => router.push("/funasprop")}
      >
        function as prop
      </button>
      <button className="btn btn-primary" onClick={() => router.push("/users")}>
        Lifting States Up
      </button>
      <button
        className="btn btn-primary"
        onClick={() => router.push("/datachange")}
      >
        Data Change
      </button>
      <button
        className="btn btn-primary"
        onClick={() => router.push("/animatedbutton")}
      >
        Animated Button
      </button>
      <button
        className="btn btn-primary"
        onClick={() => router.push("/navbar")}
      >
        NavBar
      </button>
      <button
        className="btn btn-primary"
        onClick={() => router.push("/timeline")}
      >
        Timeline
      </button>
      <button
        className="btn btn-primary"
        onClick={() => router.push("/banner")}
      >
        Banner
      </button>

      <button
        className="btn btn-primary"
        onClick={() => router.push("/music-library/musicplayer")}
      >
        player
      </button>
      <button
        className="btn btn-primary"
        onClick={() => router.push("/music-library/musicPlaylist")}
      >
        play List
      </button>
      <button
        className="btn btn-primary"
        onClick={() => router.push("/pingrid")}
      >
        pin grid
      </button>
      <button
        className="btn btn-primary"
        onClick={() => router.push("/stickyTableHeader")}
      >
        Sticky Table Header
      </button>
      <button
        className="btn btn-primary"
        onClick={() => router.push("/Hulu")}
      >
        Hulu
      </button>
      <button
        className="btn btn-primary"
        onClick={() => router.push("/debounce")}
      >
        Debounce
      </button>
      <button
        className="btn btn-primary"
        onClick={() => router.push("/stopwatch")}
      >
        StopWatch
      </button>
    </div>
  );
};

export default Page;
