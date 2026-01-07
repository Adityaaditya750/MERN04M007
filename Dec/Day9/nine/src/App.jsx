import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import { use } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)
  const [data, setData] = useState([])
  // useEffect(() => {
  //   //effect code what you want to run
  //   return () => {//it is execute when your variable is uncounted
      
  //   }
  // }, [third])//[dependecy array] if you want to run your useEffect based on any variable change then you can pass that variable in dependecy array otherwise you can pass empty array
  
//execute at all renedering
// useEffect(() => {
//   alert("Every Render")
// })

// useEffect(() => {
//   alert("Only First Render")
// }, [])


// useEffect(() => {
//   alert(`Count is changed to`)
// return () => {
//   alert(`Data Cleaned`)

// }})


  // useEffect(() => {
  //   alert(`Count is changed to `)
  // } , [ total,count])


  useEffect(() => {
    async function getData() {
      try {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts');
          let totalData = await res.json();
          setData(totalData);
      }
      catch (error) {
        console.log("Error:", error);
      }
    }
    getData();
  }, []);
  console.log("Data:", data);


  return (
    <>
      <div className='h-screen flex justify-center items-center'>
      {/* <div className='h-20 w-50 bg-amber-500 rounded flex justify-center items-center'>
        <button onClick={() => setCount(count + 1)} className='border p-2 rounded'>Count: {count}</button>
        <button onClick={() => setTotal(total + 1)} className='border p-2 rounded'>Total: {total} </button>
      </div> */}
      </div>
    </>
  )
}

export default App
