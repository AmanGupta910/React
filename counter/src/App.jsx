import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

   const [counter , setCounter] =useState(0)// hooks hai ye


  // let counter=0;
  let Increase= () =>{
    // counter=counter+1;

    if(counter>=20) return;
    console.log("Value Added}",{counter});
       setCounter(counter+1)

       
       
  }



   let Decrease= () =>{
    // counter=counter+1;

    if(counter<=0) return;
    console.log("Value Added}",{counter});
       setCounter(counter-1)
       
  }



  return (
    <>
    

    <div>
      <h1>Hello Aman</h1>
      
      <button onClick={Increase} >Add    Value</button><br/>
      <button  onClick={Decrease}>Remove Value </button>
      </div> 
      <br></br>

      <h2>
        Counter Value:{counter}
      </h2>
</>
  )
}

export default App
