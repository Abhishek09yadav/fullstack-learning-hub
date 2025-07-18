import React from 'react'

const ChildRef = ({ref}) => {
  return (
    <div>
      <input
        type="text"
        ref={ref}
        placeholder="type..."
        className="w-xs outline-none border-2 border-blue-400 focus:ring-2 ring-blue-400 rounded-md focus:outline-blue-300 "
      />
    </div>
  );
}

export default ChildRef
