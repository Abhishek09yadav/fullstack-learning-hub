"use client";
import { useCallback, useMemo, useState } from "react";
import ChildComponent from "./ChildComponent";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const HandleAdd = (e) => {
    e.preventDefault();
    if (!name) return;
    const newTodo = {
      id: Date.now(),
      name: name,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setName("");
  };
  const countTodos = useMemo(() =>{
    return todos.length;
  },[]);
  const logTodos = useCallback(() => {
    console.log("hello");
  }, []);
  const Toggle = (id) => {
    const newTodos = todos.map((todo) => {
      todo.id === id ? (todo.completed = !todo.completed) : todo.completed;
      return todo;
    });
    setTodos(newTodos);
  };
  const Delete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // console.log(todos);
  return (
    <>
      <ChildComponent logTodos={logTodos} />
      <div className="text-center text-2xl">Count: {countTodos}</div>
      <div className="container my-auto mx-auto mt-3 justify-center align-items-center ">
        <div className="text-4xl text-center font-medium underline">Todo</div>
        <div className="justify-center items-center gap-2 flex flex-row no-wrap">
          <input
            type="text"
            className="p-3 mt-3  border-3 border-gray-400 rounded-full"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 "
            onClick={(e) => {
              HandleAdd(e);
              console.log(name);
            }}
          >
            Add
          </button>
        </div>
        <ul className="flex flex-col mt-3  items-center justify-center ">
          {todos.map((todo) => {
            // console.log("todo", todo);
            return (
              <li
                className={`text-2xl flex flex-row no-wrap gap-2 `}
                onClick={() => Toggle(todo.id)}
                key={todo.id}
              >
                {" "}
                <div
                  className={`text-2xl ${todo.completed ? "line-through" : ""}`}
                >
                  {" "}
                  {todo.name}
                </div>
                <button
                  className="p-1 rounded-full bg-red-500 hover:bg-red-600 "
                  onClick={(e) => {
                    e.stopPropagation();
                    Delete(todo.id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
