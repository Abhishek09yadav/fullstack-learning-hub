"use client";
import React, { useState } from "react";
import Addusers from "./Addusers";
import DisplayUsers from "./DisplayUsers";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();

  return (
    <div className="m-4 ">
      <h1 className="text-center font-bold text-2xl underline text-amber-500">Lifting States UP Example</h1>
      <h2>Total Users:{users.length} </h2>
      <h2>Last User:{users[users.length - 1]} </h2>
      <h2>Unique Users:{[...new Set(users)].length} </h2>

      <Addusers
        user={user}
        users={users}
        setUsers={setUsers}
        setUser={setUser}
      />
      <DisplayUsers users={users} />
    </div>
  );
};

export default Users;
