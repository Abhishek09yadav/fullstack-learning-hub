"use client";
import { useState, useEffect } from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

const Accordion = () => {
  const [openIndex, SetOpenIndex] = useState(null);
  const handleToggle = (index) => {
    SetOpenIndex(index);
    console.log("index is",index);
    
  };
  const accordionItems = [
    {
      title: "What is Next.js?",
      content:
        "Next.js is a React framework for building full-stack web applications. It enables functionality like server-side rendering and static site generation.",
    },
    {
      title: "How do you install Tailwind CSS?",
      content:
        "You can install Tailwind CSS, PostCSS, and Autoprefixer using npm or yarn. Then, run `npx tailwindcss init -p` to generate the config files.",
    },
    {
      title: "What are React Icons?",
      content:
        "React Icons is a library that provides a huge collection of popular icon libraries like Font Awesome, Material Design, and more, as React components.",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-amber-50 justify-center items-center ">
      <h1 className="font-bold text-2xl underline">Faq Section</h1>
      <div className="flex flex-col gap-2 w-2xl">
        {accordionItems.map((item, index) => (
          <div className="border-2  border-yellow-500 rounded-md " key={index}>
            <div className="flex flex-row justify-between ">
              <div className="font-bold p-4 ">{item.title}</div>
              <div
                className="text-center items-center justify-center"
                onClick={() => handleToggle(index)}
              >
                <IoIosArrowDropdownCircle className="text-3xl text-gray-600" />
              </div>
            </div>

            <div className=""></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
