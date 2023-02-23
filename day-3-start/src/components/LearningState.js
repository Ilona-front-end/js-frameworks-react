import React, { useState } from 'react'

function LearningState() {
  const [count, setCount] = useState(0);

  function handleIncrementCount() {
    console.log('clicked button +')
    setCount(count + 1)
  }

  function handleDecrementCount() {
    console.log('clicked button -')
    setCount(count - 1)
  }

  return (
    <>
      <button onClick={handleDecrementCount}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrementCount}>+</button>
    </>
  )
}

export default LearningState