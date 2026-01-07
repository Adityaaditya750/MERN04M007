import React from 'react'
import { Link, NavLink } from 'react-router'

function Nav() {
  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/service">Service</NavLink>
    </div>
  )
}

export default Nav