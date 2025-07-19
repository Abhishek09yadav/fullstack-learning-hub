"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 justify-center items-center md:grid-cols-5 gap-2 m-4">
      <button
        className="bg-red-600 hover:scale-[1.05] transition-all ease-in duration-300"
        onClick={() => router.push("/check")}
      >
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
    </div>
  );
};

export default Page;
