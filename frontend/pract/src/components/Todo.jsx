"use client";
import React, { useState } from "react";
import { FaEdit, FaPlusCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

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
  const handleCompleted = (index) => {
    setTodo((prev) =>
      prev.map((value, i) => {
        return index === i ? { ...value, status: value.status ==="completed" ? "pending" :"completed" } : value;
      })
    );
  };

  const deleteTodo = (index) => {
    setTodo((prev) => prev.filter((_, i) => i != index));
  };
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

        <textarea
          className="w-full p-2 md:w-4xl border-2 border-blue-400 rounded-md "
          placeholder="add todo desc here"
          onChange={(e) =>
            setData((prev) => ({ ...prev, desc: e.target.value }))
          }
          value={data.desc}
        />

        <button
          className=" btn btn-primary  mx-auto flex place-items-center gap-2 
              disabled:cursor-not-allowed disabled:bg-gray-400"
          disabled={!data.title || !data.desc}
          onClick={handleAddTodo}
        >
          Add Todo <FaPlusCircle className="" />
        </button>
      </div>
      <div className="mt-4 ">
        {todo.length > 0 && (
          <div className="flex flex-col justify-center gap-4 w-4xl">
            {todo.map((value, index) => (
              <div
                onClick={ () => handleCompleted(index)}
                className={`flex flex-col text-center justify-between rounded-md p-5 ${
                  value.status === "pending" ? "bg-amber-500" : "bg-green-500"
                }`}
                key={index}
              >
                <div
                  className={"flex justify-between items-center rounded-md "}
                >
                  <div className="text-xl font-bold ">{value.title}</div>
                  <div className="flex gap-3 ">
                    {/* <div className="text-blue-500">
                      <FaEdit />
                    </div> */}
                    <div
                      className="text-black-400 bg-red-400 p-3 rounded-md"
                      onClick={() =>deleteTodo(index)}
                    >
                      <MdDelete />
                    </div>
                  </div>
                </div>
                <div className="text-gray-600">Description: {value.desc}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
