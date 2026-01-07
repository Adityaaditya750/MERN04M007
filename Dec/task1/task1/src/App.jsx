import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [data, setData] = useState([]);

  let getData = async () => {
    try {
      let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  useEffect(() => {
    getData();
  }, [])

  console.log("Data:", data);
  return (
    <>
      <div>
        <h1 className='bg-red-900'>Hello</h1>
        <ul className="grid gap-6 grid-cols-3">
  {data.map((item) => (
    <li key={item.id} className="bg-gray rounded-xl shadow-md p-5" >
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {item.title}
      </h2>

      <p className="text-gray-600 text-sm line-clamp-3">
        {item.body}
      </p>
    </li>
  ))}
</ul>

      </div>
    </>
  )
}

export default App
