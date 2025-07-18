"use client"
import React, { useState } from 'react'

const FunAspropChild = ({ parentComponent }) => {
  const [name,setName] = useState()
  return (
    <div>
      <h2>Child Component</h2>
      <input
        type="text"
        placeholder="type..."
        onChange={(e) => setName(e.target.value)}
        className="w-xs outline-none border-2 border-blue-400 focus:ring-2 ring-blue-400 rounded-md focus:outline-blue-300 "
      />
      <button className="btn btn-primary" onClick={() => parentComponent(name)}>
        Click Me
      </button>
    </div>
  );
};

export default FunAspropChild
