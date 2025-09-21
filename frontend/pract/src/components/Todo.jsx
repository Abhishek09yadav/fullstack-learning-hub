"use client";
import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const Todo = () => {
  const [data, setData] = useState(null);
  const [todo, setTodo] = useState([]);
  // const initial = [{
  //   title:"",
  // }]
  const handleAddTodo = () => {
    setTodo(data);
    setData(null);
  };
  const deleteTodo = (index) => {};
  return (
    <div className="flex flex-col min-h-screen place-items-center bg-amber-50 ">
      <h1 className="font-bold text-3xl text-blue-300 my-4">Todo App...</h1>
      <div className="flex gap-2 ">
        {" "}
        <input
          className="w-full p-2 md:w-4xl border-2 border-blue-400 rounded-md "
          placeholder="add todo here"
          onChange={(e) => setData(e.target.value)}
          value={data}
        />
        <button className="btn btn-primary flex place-items-center gap-2">
          Add Todo <FaPlusCircle className="" onClick={handleAddTodo} />
        </button>
      </div>
      <div className="">
        {todo.length > 0 && (
          <div className="">
            {todo.map((value, index) => (
              <div key={index}>{value}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
