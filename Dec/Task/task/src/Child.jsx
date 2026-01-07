import React, { useContext } from 'react'
import { themeContext } from './App';

function Child() {
  const theme = useContext(themeContext);
  return (
    <div>Child
        <button>click</button>
        <br />

    </div>
  )
}

export default Child