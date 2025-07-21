"use client";
import React, { useState } from "react";

import { RiUnpinLine } from "react-icons/ri";
import { TiPinOutline } from "react-icons/ti";

const PinGrid = () => {
  const initialItems = [
    { label: "p-1", id: 1, image: "/img/random_images/1.jpg" },
    { label: "p-2", id: 2, image: "/img/random_images/2.jpg" },
    { label: "p-3", id: 3, image: "/img/random_images/3.jpg" },
    { label: "p-4", id: 4, image: "/img/random_images/4.jpg" },
    { label: "p-5", id: 5, image: "/img/random_images/5.jpg" },
  ];
  const [items, setItems] = useState(initialItems);

  const handlePin = (id) => {
    const itemToPinIndex = items.findIndex((item) => item.id === id);
    if (itemToPinIndex > 0) {
      const newItems = [...items];

      // swap of two grids
      // method 1
      // [
      //   newItems[0], newItems[itemToPinIndex]
      // ] = [newItems[itemToPinIndex], newItems[0]];
      // method 2
      const temp = newItems[0];
      newItems[0] = newItems[itemToPinIndex];
      newItems[itemToPinIndex] = temp;
      setItems(newItems);
    }
  };

  return (
    // flex justify-center items-center
    <div className="grid h-screen grid-cols-4 grid-rows-8 gap-4 bg-blue-50  p-16">
      <div
        className="relative col-span-3 cursor-pointer row-span-8 text-gray-600 text-4xl bg-blue-500 rounded-md flex justify-center items-center"
        onClick={() => handlePin(1)}
      >
        <img
          src={items[0].image}
          alt={items[0].label}
          className=" absolute z-1 w-full h-full object-cover rounded-md "
        />
        <div className="absolute z-10 inset-0 flex items-center justify-center bg-black/30 text-white text-4xl font-semibold rounded-md">
          {items[0].label}
          <RiUnpinLine className="ml-2" />
        </div>
      </div>
      {items.slice(1).map((value, index) => (
        <div
          key={index}
          className="relative col-start-4 cursor-pointer row-span-2  text-4xl bg-blue-500 rounded-md flex justify-center items-center "
          onClick={() => handlePin(value.id)}
        >
          <img
            src={value.image}
            alt={value.label}
            className="w-full h-full object-cover rounded-md "
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/30 text-white overflow-hidden rounded-md">
            {value.label}
            <TiPinOutline />
          </span>
        </div>
      ))}
    </div>
  );
};

export default PinGrid;
