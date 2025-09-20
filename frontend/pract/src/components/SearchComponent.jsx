"use client";
import React, { useEffect, useState } from "react";

const SearchComponent = () => {
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const [query, setQuery] = useState("");
  const handleSearchChange = (item) => {
    setQuery(item.trim());
  };
  const filteredItems =
    query.length > 0 &&
    items.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="flex flex-col place-items-center w-full h-screen bg-amber-50">
      <h1 className="font-bold text-center text-2xl text-green-500">
        Search Here...
      </h1>
      <input
        className="w-sm md:w-2xl mt-3 outline-none  rounded-md border-2 border-blue-400 focus:ring-2 focus:ring-blue-500 "
        placeholder="search apple,banana...etc"
        onChange={(e) => handleSearchChange(e.target.value)}
      />{" "}
      <div className="">
        {filteredItems.length > 0 ? (
          <div className="flex flex-col ">
            <h1>Search Item Found</h1>
            <ul>
              {filteredItems.map((value, index) => (
                <ol key={index}>{value}</ol>
              ))}
            </ul>
          </div>
        ) : (
          <div className="font-semibold ">No Results found</div>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
