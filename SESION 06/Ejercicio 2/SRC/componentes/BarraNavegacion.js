import React from "react"
import { NavLink } from "react-router-dom"

export default function BarraNavegacion() {
  return (
    <nav className="nav">
      <NavLink to="/" end>Inicio</NavLink>
      <NavLink to="/acerca">Acerca</NavLink>
      <NavLink to="/api">API</NavLink>
    </nav>
  )
}
