"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { addTodo, deleteTodo, toggleTodo } from "@/store/features/todoSlice";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { toast } from "react-toastify";

function Todo() {
  const [text, setText] = useState("");
  const [editId, setEditId] = useState("");
  const [editText, setEditText] = useState("");
  const todos = useSelector((state) => state.todo.items);
  console.log("todos", todos);
  const dispatch = useDispatch();

  function handleAddTodo() {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setText("");
  }
  function handleToggleATodo(id) {
    dispatch(toggleTodo(id));
  }

  function handleDeleteTodo(id) {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            toast.info("todo deleted");
            dispatch(deleteTodo(id));
          },
        },
        {
          label: "No",
          onClick: () => toast.info("Cancelled"),
        },
      ],
    });
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-2 my-3 ">
        <h2 className="font-bold text-4xl underline text-gray-700 mt-3">
          Todo App
        </h2>
        <div className=" pt-9 flex flex-row">
          {/* <h2 className="mt-3">Enter Details to add:</h2> */}
          <input
            type="text"
            value={text}
            placeholder="add todo..."
            className=" border-2 border-blue-400 outline-none rounded-md focus:ring hover:ring-2 caret-blue-800 "
            onChange={(e) => setText(e.target.value)}
          />
          <IoIosAddCircleOutline
            className="text-5xl cursor-pointer hover:scale-105 text-blue-600 "
            onClick={handleAddTodo}
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2 cursor-pointer">
          {todos.map((value, index) => (
            <div
              key={index}
              className={`flex flex-row justify-between p-4 backdrop-blur-md shadow-md rounded-md gap-2  ${
                value.completed === true
                  ? "bg-gradient-to-r from-green-300 to bg-green-600"
                  : "bg-yellow-200"
              }`}
              onClick={() => handleToggleATodo(value.id)}
            >
              <div className="text-md font-semibold">{value.text}</div>
              <div className="flex flex-row ">
                {" "}
                <FaEdit className="text-xl text-yellow-600 " />
                <MdDelete
                  className="text-xl text-red-600 "
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteTodo(value.id);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Todo;
