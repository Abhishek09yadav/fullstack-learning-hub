import React from "react";

const Addusers = (    { user,users,setUsers,setUser}) => {
  const handleChange = (e) => {
    setUser(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, user]);
  };
  return (
    <div>
      <div className="flex flex-row gap-2 ">
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
    </div>
  );
};

export default Addusers;
