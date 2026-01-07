import React from 'react'
import { Outlet } from 'react-router'

function Service() {
  return (
    <div>Service
        <Outlet />
    </div>
  )
}

export default Service