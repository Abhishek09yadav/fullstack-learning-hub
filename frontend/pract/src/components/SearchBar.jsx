"use client";
import React, { useState } from "react";

const SearchBar = () => {
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const [filtereditems, SetFilteredItems] = useState(null);
  const handleChange = (e) => {
    // setText(e.target.value)
    const fitem = items.filter((item) =>
      item.toLowerCase().includes(e.target.value.trim().toLowerCase())
    );

    SetFilteredItems(fitem);
  };

  return (
    <div className="bg-amber-50 h-screen  flex flex-col place-items-center ">
      <div className="text-3xl my-2 font-bold text-yellow-700">
        Dynamic Search Filter
      </div>
      <input
        type="text"
        className="border-yellow-500 focus:outline-none focus:ring-3 p-2 caret-amber-400  focus:ring-yellow-400 border rounded-md w-xs xl:w-sm   md:w-2xl "
        placeholder="Apple,Banana,cherry,Date..."
        onChange={handleChange}
      ></input>
      {filtereditems && (
        <div className="bg-white mt-4 w-3/4 text-center shadow-md rounded-lg p-4 gap-4 flex flex-col md:w-1/2">
          {filtereditems.map((item, index) => (
            <div key={index}>
              <h1 className="text-xl font-italic text-gray-600 ">{item}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
