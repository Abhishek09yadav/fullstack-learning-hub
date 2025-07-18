"use client";
import React, { useState } from "react";
import people from "./people.js";

const NestedObj = () => {
  const [boxStyle, setBoxStyle] = useState({});
  const [city, setCity] = useState();
  const boxStyleMap = {
    blue: "bg-blue-500 text-gray-200",
    green: "bg-green-500 text-black",
    gray: "bg-gray-500 text-black",
    pink: "bg-pink-500 text-gray-200",
  };
  const handlechange = (e) => {
    setBoxStyle(boxStyleMap[e.target.value]);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  // const handleCityEnter =(e,index)=>{
 
  // }
  return (
    <div>
      <h1 className="text-center font-bold text-2xl underline text-blue-400 ">Nested Object Example </h1>
      <select
        className="bg-blue-100 text-blue-900 rounded p-2"
        onChange={handlechange}
      >
        <option className="bg-blue-200 text-blue-900" value="blue">
          blue
        </option>
        <option className="bg-green-200 text-green-900" value="green">
          green
        </option>
        <option className="bg-gray-200 text-gray-900" value="gray">
          gray
        </option>
        <option className="bg-pink-200 text-pink-900" value="pink">
          pink
        </option>
      </select>
      <div
        className={`grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 `}
      >
        {people.map((value, index) => {
          return (
            <ul
              className={`flex flex-col gap-2 p-3 text-center  rounded-md ${boxStyle}`}
              key={index}
            >
              <li>Name: {value.name}</li>
              <li>Age: {value.age}</li>

              <h3 className="">deep nested objs - address</h3>
              <li>street : {value.address.street}</li>
              <li>city : {value.address.city}</li>
              <li>zip: {value.address.zip}</li>
              <h3>hobbies -</h3>
              {value.hobbies.map((h, i) => {
                return (
                  <div className="flex flex-col text-center" key={i}>
                    {h}
                  </div>
                );
              })}
              {/* <input
                type="text"
                className="w-full border-2 "
                placeholder="enter city"
                onChange={(e) => handleCityChange(e)}
                onKeyDown={(e)=>{
                  if(e.key =="Enter"){

                  }
                } }
              /> */}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default NestedObj;
