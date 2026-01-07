
import './App.css'
import Home from './Home'
import Home2 from './Home2'
import Card from './Card'

function App() {
  let obj={name:"Aditya",age:22,phone:1234567890}
  let handelFun=()=>{
    console.log("hello from function component")
  }

  return (
    <>

    <div className='flex gap-2 flex-wrap mt-40 ml-20'>
      <Card></Card>
    <Card></Card><Card></Card><Card></Card><Card></Card>
    </div>

    </>
  )
}

export default App
