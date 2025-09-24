import React from "react"
import { NavLink } from "react-router-dom"

export default function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/api">API Demo</NavLink>
    </nav>
  )
}
