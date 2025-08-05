"use client";
import React from "react";
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
const tableBodyData = [
  { id: "row-1", col1: "Data A1", col2: "Data B1", col3: "Data C1" },
  { id: "row-2", col1: "Data A2", col2: "Data B2", col3: "Data C2" },
  { id: "row-3", col1: "Data A3", col2: "Data B3", col3: "Data C3" },
  { id: "row-4", col1: "Data A4", col2: "Data B4", col3: "Data C4" },
  { id: "row-5", col1: "Data A5", col2: "Data B5", col3: "Data C5" },
  { id: "row-6", col1: "Data A6", col2: "Data B6", col3: "Data C6" },
];
const headerTitles = ["Header 1", "Header 2", "Header 3"];
const rowCount = 6;

const StickyTableHeader = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-green-100">
      <div className="w-full pb-48 flex overflow-scroll  ">
        <table className="relative w-full border border-green-700 rounded-md">
          {tableSections.map((section, index) => (
            <React.Fragment key={index}>
              <thead>
                <tr>
                  {headerTitles.map((title, idx) => (
                    <th
                      key={idx}
                      className={`sticky top-0 px-6 py-3 ${section.headerStyle}`}
                    >
                      {title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className={`divide-y text-center ${section.bodyStyle}`}>
                {tableBodyData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.col1}</td>
                    <td>{row.col2}</td>
                    <td>{row.col3}</td>
                  </tr>
                ))}
              </tbody>
            </React.Fragment>
          ))}
        </table>
      </div>
    </div>
  );
};

export default StickyTableHeader;
