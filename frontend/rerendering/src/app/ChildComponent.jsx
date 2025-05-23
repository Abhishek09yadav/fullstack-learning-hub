import React, { memo } from 'react'

const ChildComponent = () => {
  console.log('ChildComponent rendered');

  return (
    <div>
      
    </div>
  )
}

export default memo(ChildComponent)
