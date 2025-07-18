"use client"
import React, { useState } from 'react'

const Users = () => {
  const [users,setUsers] = useState([]);
  const[user,setUser] = useState();
  const handleChange=(e)=>{
    setUser(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setUsers([...users,user])
  }
  return (
    <div className="m-4 ">
      <h2>Total Users:{users.length} </h2>
      <h2>Last User:{users[users.length -1]} </h2>
      <h2>Unique Users:{[...new Set(users)].length} </h2>
      <div className='flex flex-row gap-2 '>
        <input
          type="text"
          onChange={handleChange}
          className="w-full md:w-1/2 outline-2 caret-blue-300 rounded-md"
        />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div className='flex flex-col'>
        {
         users && users.map((value,index)=>(
            <div className='font-semibold' key={index}>{value}</div>
          ))
        }
      </div>
    </div>
  );
}

export default Users
