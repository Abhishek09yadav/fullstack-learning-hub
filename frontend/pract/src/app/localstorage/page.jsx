'use client'
import React, { useState, useEffect } from "react";

const Page = () => {
  const [value, setValue] = useState(() => {
    const ini = localStorage.getItem("inputValue");
    return ini !== null ? ini : "";
  });

  const handleChange = (curr) => {
    console.log("value is ", curr);
    setValue(curr);
    localStorage.setItem("inputValue", curr);
  };

  return (
    <div className="flex flex-col gap-3  items-center justify-center h-screen">
      <h1 className="font-bold">Type Input here: </h1>
      <input className="border-2  border-blue-400  focus:ring-2 focus:ring-blue-500 rounded-md  outline-none "
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default Page;
