"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";

function Todo() {
  const [todo, setTodo] = useState(null);
  const todos = useSelector((state) => state.todo.items);
  console.log("todos", todos);

  function addTodo() {}
  function toggleTodo() {}
  function deleteTodo() {}
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-2">
        <h2 className="font-bold text-4xl underline text-gray-700 mt-3">
          Todo App
        </h2>
        <div className=" pt-9 flex flex-row">
          {/* <h2 className="mt-3">Enter Details to add:</h2> */}
          <input
            type="text"
            placeholder="add todo..."
            className=" border-2 border-blue-400 outline-none rounded-md focus:ring hover:ring-2 caret-blue-800 "
          />
          <IoIosAddCircleOutline className="text-5xl text-blue-600 " />
        </div>
        <div className="flex flex-col">
          {todos.map((value, index) => (
            <div
              key={index}
              className="flex flex-row justify-around p-4 backdrop-blur-md shadow-md rounded-md"
            >
              <div className="text-md font-semibold ">{value.name}</div>

              <FaEdit className="text-xl text-yellow-600 " />
              <MdDelete className="text-xl text-red-600 " />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Todo;
