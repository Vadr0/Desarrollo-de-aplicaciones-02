import React, { useEffect, useState } from "react"

export default function WikiDemo() {
  const [datos, setDatos] = useState([])
  const [busqueda, setBusqueda] = useState("ReactJS")
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    setCargando(true)
    const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(busqueda)}&format=json&origin=*`
    fetch(url)
      .then(r => r.json())
      .then(json => setDatos(json))
      .finally(() => setCargando(false))
  }, [busqueda])

  return (
    <div className="carta">
      <h2>Consulta API de Wikipedia</h2>
      <input value={busqueda} onChange={e => setBusqueda(e.target.value)} />
      {cargando ? <p>Cargando...</p> : (
        <ul>
          {Array.isArray(datos) && datos.map((item, i) => <li key={i}>{String(item)}</li>)}
        </ul>
      )}
    </div>
  )
}
