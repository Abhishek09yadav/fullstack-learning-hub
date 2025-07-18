"use client";
import React from "react";
import FunAspropChild from "./FunAspropChild";

const FunAsPropParent = () => {
  const parentComponent = (name) => {
    if (!name) {
      return alert("write name first");
    }
    alert(`name is: ${name}`);
    
  };
  return (
    <div>
      <FunAspropChild parentComponent={parentComponent} />
    </div>
  );
};

export default FunAsPropParent;
