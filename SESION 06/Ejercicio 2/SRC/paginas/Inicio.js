import React from "react"

export default function Inicio({ children }) {
  return (
    <div className="carta">
      <h2>Página de Inicio</h2>
      <p>Bienvenido a la aplicación de ejemplo en React.</p>
      {children}
    </div>
  )
}
