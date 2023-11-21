import { useState } from 'react'
import './App.css'

function App() {

  let [number, setNumber] = useState(0)
  
  const increaseNumber = () => {
    if(number < 20)
      setNumber(number + 1)
    console.log("Calling increaseNumber()");
  }

  const descreaseNumber = () => {
    if(number > 0)
      setNumber(number -1 )
    console.log("Calling descreaseNumber()");
  }

  return (
    <>
      <h1>React Hook</h1>
      <h3>Number : 0</h3>
      <button onClick={increaseNumber}>Increase Number</button>
      <button onClick={descreaseNumber}>Decrease Number</button>
      <h3>Updated number : {number}</h3>
    </>
  )
}

export default App
