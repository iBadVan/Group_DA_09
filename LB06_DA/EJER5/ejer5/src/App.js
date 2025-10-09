import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    characters: [
      { name: 'Ana Lucia Velazco Meza', focus: 'Desarrollo de Aplicaciones' },
      { name: 'Toshiro Nagata', focus: 'Redes y Ciberseguridad' },
      { name: 'María Zúñiga', focus: 'Desarrollo Web Full-Stack' },
      { name: 'Jorge Vizcarra', focus: 'IoT y Sistemas Embebidos' },
    ],
  };

  removeCharacter = (index) => {
    this.setState((prev) => ({
      characters: prev.characters.filter((_, i) => i !== index),
    }));
  };

  handleSubmit = (newCharacter) => {
    this.setState((prev) => ({
      characters: [...prev.characters, newCharacter],
    }));
  };

  render() {
    const { characters } = this.state;

    return (
      <div style={{ maxWidth: 820, margin: '40px auto', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
        <h1>Actividad 4 — Ejercicio 1 (UCSM · Ingeniería de Sistemas 2025)</h1>
        <p>
          Flujo: <code>App(state)</code> → <code>Table</code> → <code>TableBody</code>.
          Además, <code>Form</code> levanta datos a <code>App</code>.
        </p>
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <h2 style={{ marginTop: 28 }}>Agregar integrante (UCSM 2025)</h2>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
