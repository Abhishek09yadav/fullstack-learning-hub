"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-4 md:grid-cols-6 justify-center items-center">
        <button onClick={router.push("/counter")}>Counter</button>
        <button onClick={router.push("/todo")}>Todo</button>
      </div>
    </div>
  );
};

export default Page;
