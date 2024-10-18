
import { useState } from "react"
import './App.css'


function App() {
  const [count, setCount] = useState(0);

  const incrementCount = async () => {
    
    try {
      const response = await fetch('http://localhost:3000/increment', {
        method: 'POST',
        headers : {
          'Content-Type' : 'application/json' 
        },
        body: JSON.stringify({ count: count })
      })
      const data = await response.json()
      setCount(data.count)
      
    } catch (error) {
      console.error('Error Incrementing count:', error);
    }
  }
  return (
    <>
    <div>
      <h1>Current Count: {count}</h1>
      <button onClick={incrementCount} >Count Button</button>
    </div>
    </>
  )
}

export default App
