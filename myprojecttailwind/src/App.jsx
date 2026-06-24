import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/cards'
function App() {
  const [count, setCount] = useState(0)

  let name={
    Fname:"Aman",
    Mname:"Brijesh",
    Lname:"Gupta"
  }

  let Arr=[12,12,23];



  return (
    <>
    <h2 className='bg-green-300  text-black p-4 rounded-xl' > Tailwind class</h2>
    < Card  user="Aman" Usernameis={name} myArr={Arr}/>
    <br>
    </br>
    < Card/>
    
    </>
  )
}
// Usernameis={name} myArr={Arr}

export default App
