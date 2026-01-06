import { useRef,useEffect} from 'react'
import './App.css'
import Home from './Home';

function App() {

  // let nameRef = useRef();
  // useEffect(() => {
  //   console.log(nameRef.current);
  // }, []);


  let inputRef = useRef();

  // useEffect(() => { 
  //  console.log(inputRef.current.value);
  // }, []);

  function handelSubmit(e) {
    e.preventDefault();
    console.log(inputRef.current.value);
    // localStorage.setItem("name",inputRef.current.value);
  }

console.log("render");

  return (
    <>
      {/* <h1 ref={nameRef}>Hello Tailwind CSS!</h1> */}
      <form action="" onSubmit={handelSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
      <Home />
    </>
  )
}

export default App
