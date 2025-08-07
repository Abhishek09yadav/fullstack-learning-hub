"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-4 md:grid-cols-6 justify-center items-center gap-4 m-4 ">
        <button className="bg-blue-400 hover:bg-blue-500 hover:scale-105 rounded-md transition-all duration-300 text-slate-600 hover:text-white p-2" onClick={() => router.push("/counter")}>Counter</button>
        <button className="bg-blue-400 hover:bg-blue-500 hover:scale-105 rounded-md transition-all duration-300 text-slate-600 hover:text-white p-2" onClick={() => router.push("/todo")}>Todo</button>
      </div>
    </div>
  );
};

export default Page;
