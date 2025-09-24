import React, { Component } from "react"
import { Routes, Route } from "react-router-dom"
import BarraNavegacion from "./componentes/BarraNavegacion"
import Tabla from "./componentes/Tabla"
import Formulario from "./componentes/Formulario"
import Inicio from "./paginas/Inicio"
import Acerca from "./paginas/Acerca"
import WikiDemo from "./api/WikiDemo"

export default class App extends Component {
  state = {
    personas: [
      { nombre: "Carlos", trabajo: "Portero" },
      { nombre: "María", trabajo: "Mesera" },
    ]
  }

  eliminarPersona = (indice) => {
    this.setState(({ personas }) => ({
      personas: personas.filter((_, i) => i !== indice)
    }))
  }

  agregarPersona = (persona) => {
    this.setState(({ personas }) => ({
      personas: [...personas, persona]
    }))
  }

  render() {
    const { personas } = this.state
    return (
      <>
        <BarraNavegacion />
        <div className="contenedor">
          <Routes>
            <Route path="/" element={
              <Inicio>
                <div className="carta">
                  <h3>Lista de Personas</h3>
                  <Tabla datosPersonas={personas} eliminarPersona={this.eliminarPersona} />
                  <Formulario agregarPersona={this.agregarPersona} />
                </div>
              </Inicio>
            } />
            <Route path="/acerca" element={<Acerca />} />
            <Route path="/api" element={<WikiDemo />} />
          </Routes>
        </div>
      </>
    )
  }
}
