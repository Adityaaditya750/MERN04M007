import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router'
import Home from './component/Home'
import Foods from './component/Foods'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/foods' element={<Foods></Foods>} />
        </Routes>
      </div>
    </>
  )
}

export default App
