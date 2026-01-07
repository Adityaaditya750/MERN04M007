import React from 'react'

function Card() {
  return (
    <div className='w-50 h-75 bg-amber-300 p-2 shadow-2xl'>
        <img src="" alt=""  className='w-full h-30 shadow-2xs bg-red-400 rounded-[50%] hover:scale-105
        transition duration-200 delay-75' />
        <h3 className='text-green-500 front font-extrabold text-2xl text-center mt-2'>Title</h3>
        <p className='text-gray-400 text-center text-xl'>Description</p>
    </div>
  )
}

export default Card