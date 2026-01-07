import {Routes, Route } from 'react-router'  
import './App.css'
import Home from './component/Home'
import About from './component/About'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import Service from './component/Service'
import Profile from './component/Profile'
import Cart from './component/Cart'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='profile/:id' element={<Profile/>}></Route>
          </Route>
          <Route path='/service' element={<Service/>}>
          <Route path='cart' element={<Cart/>}></Route>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
