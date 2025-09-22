"use client";
import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const Todo = () => {
  const initial = {
    title: "",
    desc: "",
    status: "pending",
    Date: Date.now(),
  };

  const [data, setData] = useState(initial);
  const [todo, setTodo] = useState([]);

  const handleAddTodo = () => {
    if (!data.title.trim() || !data.desc.trim()) return;
    setTodo((prev) => [...prev, data]);
    setData(initial);
  };
  const deleteTodo = (index) => {};
  return (
    <div className="flex flex-col min-h-screen place-items-center bg-amber-50 ">
      <h1 className="font-bold text-3xl text-blue-300 my-4">Todo App...</h1>
      <div className="flex flex-col gap-2 ">
        <input
          className="w-full p-2 md:w-4xl border-2 border-blue-400 rounded-md "
          placeholder="add todo here"
          onChange={(e) =>
            setData((prev) => ({ ...prev, title: e.target.value }))
          }
          value={data.title}
        />
        {data.title && (
          <textarea
            className="w-full p-2 md:w-4xl border-2 border-blue-400 rounded-md "
            placeholder="add todo desc here"
            onChange={(e) =>
              setData((prev) => ({ ...prev, desc: e.target.value }))
            }
            value={data.desc}
          />
        )}
        <button
          className=" btn btn-primary  mx-auto flex place-items-center gap-2 
              disabled:cursor-not-allowed disabled:bg-gray-400"
          disabled={!data.title || !data.desc}
          onClick={handleAddTodo}
        >
          Add Todo <FaPlusCircle className="" />
        </button>
      </div>
      <div className="">
        {todo.length > 0 && (
          <div className="flex flex-col max-w-lg">
            {todo.map((value, index) => (
              <div className={"flex justify-between rounded-md "} key={index}>
                <div className="text-xl font-bold ">{value.title}</div>
                <div className="flex  ">
                  <div className="text-blue-500"></div>
                  <div className="text-red-400"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
