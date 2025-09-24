import React from "react"

// Encabezado de la tabla
const EncabezadoTabla = () => (
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Trabajo</th>
      <th>Acción</th>
    </tr>
  </thead>
)

// Cuerpo de la tabla (recibe props)
const CuerpoTabla = ({ datosPersonas, eliminarPersona }) => {
  return (
    <tbody>
      {datosPersonas.map((fila, indice) => (
        <tr key={indice}>
          <td>{fila.nombre}</td>
          <td>{fila.trabajo}</td>
          <td>
            <button onClick={() => eliminarPersona(indice)}>Eliminar</button>
          </td>
        </tr>
      ))}
    </tbody>
  )
}

// Componente principal de la tabla
export default function Tabla({ datosPersonas, eliminarPersona }) {
  return (
    <table>
      <EncabezadoTabla />
      <CuerpoTabla datosPersonas={datosPersonas} eliminarPersona={eliminarPersona} />
    </table>
  )
}

