import React, { Component } from "react"

export default class Formulario extends Component {
  estadoInicial = { nombre: "", trabajo: "" }
  state = this.estadoInicial

  manejarCambio = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  enviarFormulario = () => {
    const { nombre, trabajo } = this.state
    if (!nombre.trim() || !trabajo.trim()) return
    this.props.agregarPersona(this.state)
    this.setState(this.estadoInicial)
  }

  render() {
    const { nombre, trabajo } = this.state
    return (
      <div className="carta">
        <h3>Agregar Persona</h3>
        <label>Nombre</label>
        <input type="text" name="nombre" value={nombre} onChange={this.manejarCambio} />
        <label>Trabajo</label>
        <input type="text" name="trabajo" value={trabajo} onChange={this.manejarCambio} />
        <button onClick={this.enviarFormulario}>Agregar</button>
      </div>
    )
  }
}
