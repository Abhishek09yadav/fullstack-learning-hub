"use client";
import React, { useState } from "react";

const Check = () => {
  const skills = ["react", "python", "js", "nodejs"];
  const [selected, setSelected] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelected((prev) => [...prev, value]);
    } else {
      setSelected((prev) => [...prev.filter((f) => f !== value)]);
    }
  };
  return (
    <div className="flex flex-col gap-2 mx-2">
      {skills.map((value, index) => (
        <div key={index} className="flex flex-row gap-2 ">
          <input
            className=""
            onChange={(e) => handleChange(e)}
            id={value}
            value={value}
            type="checkbox"
          ></input>
          <label htmlFor={value}>{value}</label>
        </div>
      ))}
      {selected && (
        <div className="flex flex-row gap-2 mr-3 ">
          <div className="">
            {selected.map((value, index) => (
              <div key={index}>{value}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Check;
