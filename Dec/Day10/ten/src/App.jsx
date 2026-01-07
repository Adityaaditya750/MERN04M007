
import { use, useEffect } from 'react';
import { useState } from 'react';
import './App.css'
import axios from 'axios';
import Home from './Home';

function App() {
  let [data, setData] = useState([]);

   let getData = async ()=>{
    try{
      // let res = await fetch('https://jsonplaceholder.typicode.com/posts');
      // let totalData = await res.json();
      // setData(totalData);
      // let res= await axios.get('https://jsonplaceholder.typicode.com/posts');
      // setData(res.data);

      // let res= await axios.get('https://jsonplaceholder.typicode.com/posts/3');
      // console.log(res.data);



      // let res= await axios.post('https://jsonplaceholder.typicode.com/posts',{
      //   title: 'foo',
      //   body: 'bar',
      //   userId: 1,
      // });
      // console.log(res.data);
      // let res= await axios.put('https://jsonplaceholder.typicode.com/posts/1',{
      //   id: 1,
      //   title: 'foo',
      //   body: 'bar',
      //   userId: 3,
      // });
      // console.log(res.data);
      // let res= await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
      // console.log(res.data);






    }
    catch(error){
      console.log("Error:", error);
    }
   }
   getData();

   useEffect(()=>{
    getData();
   }, [])

   console.log("Data:", data);
  return (
    <>
      <div>
        <h1 className='bg-red-900'>Hello</h1>
        <ul>
          {data.map((item)=>{
            return <li key={item.id}>{item.title}</li>
          })
          }
        </ul>
      </div>
      <Home />
    </>
  )
}

export default App
