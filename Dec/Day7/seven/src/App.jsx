import { useState } from 'react'
import Home from './Home';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name,setname]=useState("");
  const [obj,setobj]=useState(null);
  
let handelText=()=>{
  setname("Aditya");
}
  return (
    <>
    Hello
      {/* <button onClick={() => setCount((count) => count + 1)}>count {count}</button>
      <br />
      <br />
      <br />
      Name is : {name}

      <br />
      <button onClick={handelText}>click here to add some text</button>
      <br />
      object value is : {obj}
      <br />
      <button onClick={()=>setobj({name:"Aditya",age:22,city:"pune"})}>click here to add object</button> */}
      <Home />
    </>
  )
}

export default App
