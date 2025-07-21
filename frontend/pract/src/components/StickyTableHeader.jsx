"use client"
import React from 'react'
const tableSections = [
  {
    theme: "red",
    headerStyle: "text-red-900 bg-red-300",
    bodyStyle: "bg-red-100",
  },
  {
    theme: "green",
    headerStyle: "text-green-900 bg-green-300",
    bodyStyle: "bg-green-100",
  },
  {
    theme: "blue",
    headerStyle: "text-blue-900 bg-blue-300",
    bodyStyle: "bg-blue-100",
  },
  {
    theme: "yellow",
    headerStyle: "text-yellow-900 bg-yellow-300",
    bodyStyle: "bg-yellow-100",
  },
  {
    theme: "purple",
    headerStyle: "text-purple-900 bg-purple-300",
    bodyStyle: "bg-purple-100",
  },
];
const headerTitles = ["Header 1", "Header 2", "Header 3"];
const rowCount = 6;


const stickyTableHeader = () => {
  
  return (
    <div className="flex flex-col w-full h-screen bg-green-100">
      <div className="w-full p-16 flex flex-grow overflow-auto ">
        <table className= "relative w-full border border-green-700 rounded-md">a</table>
      </div>
    </div>
  );
}

export default stickyTableHeader
