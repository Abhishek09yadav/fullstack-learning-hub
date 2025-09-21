"use client";
import React, { useState } from "react";

const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabs = [
    { title: "Profile", content: "This is the Profile tab content." },
    { title: "Settings", content: "Here you can manage your settings." },
    { title: "Activity", content: "Recent user activity will show here." },
  ];

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-2xl">
      <div className="flex border-b border-gray-200 mb-4">
        {tabs.map((value, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex-1 py-2 text-center cursor-pointer font-medium transition-colors duration-300 text-slate-500 ${
              activeIndex === index
                ? "font-bold border-b-2 text-slate-800 border-blue-600"
                : "hover:text-blue-400"
            }`}
          >
            {value.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
