import React from 'react'

function Home2({b=20 ,obj,children="no children passed"}) {
  return (
    <div>Home2
        <br />
        {b}
        <h2 className='bg-amber-400 text-2xl'>this is home 2 heading</h2>
        <br />
        Name: {obj.name}
        <br />
        {children}
    </div>
  )
}

export default Home2