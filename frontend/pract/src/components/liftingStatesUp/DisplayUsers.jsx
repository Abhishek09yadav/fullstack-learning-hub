import React from 'react'

const DisplayUsers = ({users}) => {

  return (
    <div>
      <div className="flex flex-col">
        {users &&
          users.map((value, index) => (
            <div className="font-semibold" key={index}>
              {value}
            </div>
          ))}
      </div>
    </div>
  );
}

export default DisplayUsers
