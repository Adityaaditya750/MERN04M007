import { createContext } from 'react'
import './App.css'
import Child from './Child';

let themeContext = createContext();
function App() {

  

  return (
    <>
    Hello
      <themeContext.Provider value={function(){}}>
        <Child>

        </Child>
      </themeContext.Provider>
    </>
  )
}

export {themeContext}
export default App
