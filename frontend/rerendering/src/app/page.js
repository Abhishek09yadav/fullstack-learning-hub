"use client";
import { useState } from "react";
import ChildComponent from "./ChildComponent";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const HandleAdd = (e) => {
    const newTodo = {
      id: Date.now(),
      name: name,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setName("");
  };
  const Toggle = (id) => {
    const newTodos = todos.map((todo) => {
      todo.id === id ? todo.completed = !todo.completed : todo.completed;
      return todo;
    })
    setTodos(newTodos) 
  };
  const Delete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <ChildComponent />
      <div className="container my-auto mx-auto mt-3  ">
        <div className="text-4xl text-center font-medium underline">sbd</div>
        <div className="justify-center items-center gap-2 flex flex-row no-wrap">
          <input type="text" className="p-3 mt-3  border-3 border-gray-400 rounded-full" value={name} onChange={(e) =>setName(e.target.value)}   />
          <button className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 " onClick={() => HandleAdd()} >Add</button>
        </div>
        <ul>
          {
            todos.map((todo) =>{
              <li key={todo.id} > {todo.name} </li>
            })
          }
        </ul>
      </div>
    </>
  );
}
