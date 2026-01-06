import React from 'react'
import { useEffect,useRef } from 'react'

function Home() {
    let inputRef=useRef();
    let emailRef=useRef();
    let numberRef=useRef();
    let passwordRef=useRef();

    function handleSubmitt(e){
        e.preventDefault();
        let name=inputRef.current.value;
        let email=emailRef.current.value;
        let number=numberRef.current.value;
        let password=passwordRef.current.value;

        localStorage.setItem("User Details:",JSON.stringify({name,email,number,password}));
    }
    
  return (
    
        <form action="" onSubmit={handleSubmitt}>
            <input type="text" ref={inputRef} />
            <input type="email" ref={emailRef} />
            <input type="number" ref={numberRef} />
            <input type="password" ref={passwordRef} />
            <button type="submit">Submit</button>
        </form>
  )
}

export default Home