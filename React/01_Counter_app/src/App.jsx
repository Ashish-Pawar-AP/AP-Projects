import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increment(){
    if(count<20){
      setCount((count)=>count+1)
    }
  }

  function decrement(){
    if(count>0){
      setCount((count)=>count-1)
    }
  }

  function reset(){
    setCount(0)
  }

  return (
    <>
      <div className=' flex flex-col gap-4 '>
        <h2 className=' text-3xl'>Counter App</h2>
        <span>Count: {count}</span>
        <div >
          <button className=' mr-1.5' onClick={increment}>Increase</button>
          <button onClick={decrement}>decrease</button>
        </div>

        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default App
