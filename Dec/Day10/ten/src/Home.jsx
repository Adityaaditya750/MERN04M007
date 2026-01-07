import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';



function Home() {
    const [data, setData] = useState([]);
    let getData = async ()=>{
     try{
       let res= await axios.get('https://jsonplaceholder.typicode.com/posts');  
         setData(res.data);
        }
        catch(error){
         console.log("Error:", error);
         }
        }
        useEffect(()=>{
            getData();
        }, [])
        console.log("Data:", data);


    
  return (
    <div>Home

    </div>
  )
}

export default Home