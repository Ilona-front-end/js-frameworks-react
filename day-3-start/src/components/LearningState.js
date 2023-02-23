import React, { useState } from 'react'

function LearningState() {
  const [count, setCount] = useState(0);

  function clickCountPlus() {
    console.log('clicked button +')
    setCount(count + 1)
  }

  function clickCountMinus() {
    console.log('clicked button -')
    setCount(count - 1)
  }

  return (
    <>
      <button onClick={clickCountMinus}>-</button>
      <span>{count}</span>
      <button onClick={clickCountPlus}>+</button>
    </>
  )
}

export default LearningState