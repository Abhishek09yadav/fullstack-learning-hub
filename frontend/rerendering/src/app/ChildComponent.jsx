import React, { memo } from 'react'

function ChildComponent ({ logTodos }) {
  console.log("ChildComponent rendered");
  return <div className='flex flex-row item-center justify-center gap-3 mt-2'>
    <button className='p-3 bg-red-400 hover:bg-red-600 rounded-md flex flex-row item-center justify-center' onClick={logTodos}>Log Todos</button>
  </div>;
}
export default memo(ChildComponent)
