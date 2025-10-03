import React, { Component } from 'react';
import Table from './Table';
import './styles.css';


class App extends Component {
  render() {
    const characters = [
      { name: 'Mauricio Lazo', job: 'Mantenido' },
      { name: 'Ivancito Gamer', job: 'Mantenido ' },
      { name: 'Sebastian Castro', job: 'Mantenido' },
    ];

    return (
      <div>
        <h1>Tablita prueba</h1>
        <Table characterData={characters} />
      </div>
    );
  }
}

export default App;
