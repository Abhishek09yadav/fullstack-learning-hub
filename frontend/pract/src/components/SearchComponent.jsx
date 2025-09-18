"use client";
import React, { useState } from "react";

const SearchComponent = () => {
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const [query, setQuery] = useState("");
  return (
    <div>
      <div className="flex flex-col place-items-center w-full h-screen bg-amber-50">
        <input className=""></input>
      </div>
    </div>
  );
};

export default SearchComponent;
