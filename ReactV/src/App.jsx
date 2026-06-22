import { useState } from 'react'
import New from './Aman.jsx'


function App() {
  const [count, setCount] = useState(0)

  const Username="Aman&Vipil"
  return (
    <>
       <New/>
     <h1>Hello byVite |{Username} </h1>

     
    </>
  )
}

export default App
