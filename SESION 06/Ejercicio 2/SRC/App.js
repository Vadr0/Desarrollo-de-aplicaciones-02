import React, { Component } from "react"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Table from "./components/Table"
import Form from "./components/Form"
import Home from "./pages/Home"
import About from "./pages/About"
import WikiDemo from "./api/WikiDemo"

export default class App extends Component {
  state = {
    characters: [
      { name: "Charlie", job: "Janitor" },
      { name: "Mac",     job: "Bouncer" },
      { name: "Dee",     job: "Aspiring actress" },
      { name: "Dennis",  job: "Bartender" },
    ],
  }

  removeCharacter = (index) => {
    this.setState(({ characters }) => ({
      characters: characters.filter((_, i) => i !== index)
    }))
  }

  handleSubmit = (character) => {
    this.setState(({ characters }) => ({
      characters: [...characters, character]
    }))
  }

  render() {
    const { characters } = this.state

    return (
      <>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={
              <Home>
                <div className="card" style={{ marginTop: 16 }}>
                  <h3>Lista de Personas</h3>
                  <Table characterData={characters} removeCharacter={this.removeCharacter} />
                  <Form handleSubmit={this.handleSubmit} />
                </div>
              </Home>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/api" element={<WikiDemo />} />
          </Routes>
        </div>
      </>
    )
  }
}
