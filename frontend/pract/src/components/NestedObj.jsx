import React from "react";
import people from "./people.js";
const NestedObj = () => {
  return (
    <div>
      <h1 className="text-center">Nested Object Example </h1>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 ">
        {people.map((value, index) => {
          return (
            <ul className="flex flex-col gap-2 p-3 text-center bg-gray-200 rounded-md " key={index}>
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
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default NestedObj;
