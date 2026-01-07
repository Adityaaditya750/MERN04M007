import { useState } from 'react'
import './App.css'
import Dashbord from './componet/Dashbord';
import Home from './componet/Home';
import Navbar from './componet/Navbar';

function App() {
  
const [isLogin, setIsLogin] = useState(false);
 if(isLogin){
  return (
    <>
    <Navbar isLogin={isLogin}/>  
    <Dashbord />
    </>
    
  )
 }
 else
 {
 
 
  return (
    <>
    <Navbar setIsLogin={setIsLogin} />
      <Home/>
    </>
  )
}
}
export default App
