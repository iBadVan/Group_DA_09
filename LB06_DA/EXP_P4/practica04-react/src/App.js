import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    characters: [
      { name: 'Mauricio', job: 'Desarrollador' }, 
      { name: 'Valerinao', job: 'Diseñadora UX' }, 
      { name: 'Iván', job: 'Network Engineer' }, 
      { name: 'Edducito', job: 'Data Scientist' },
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
      <div style={{ maxWidth: 760, margin: '40px auto', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
        <h1>Práctica 04 — Estado y Formularios</h1>
        <p>
          Flujo: <code>App(state)</code> → <code>Table</code> (datos y función <code>removeCharacter</code>) → <code>TableBody</code>.
          Además, <code>Form</code> levanta datos a <code>App</code> vía <code>handleSubmit</code>.
        </p>

        {/* b) Pasar datos y función como props */}
        <Table characterData={characters} removeCharacter={this.removeCharacter} />

        <h2 style={{ marginTop: 32 }}>Agregar nuevo registro</h2>
        {/* c) Formulario controlado: pasa handleSubmit al Form */}
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
