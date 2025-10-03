import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [
        { name: 'Mauricio Lazo', job: 'Mantenido' },
        { name: 'Ivancito Gamer', job: 'Mantenido' },
        { name: 'Sebastian Castro', job: 'Mantenido' },
      ],
    };
  }

  removeCharacter = (index) => {
    this.setState((prevState) => {
      return {
        characters: prevState.characters.filter((_, i) => i !== index),
      };
    });
  };

  handleSubmit = (newCharacter) => {
    this.setState((prevState) => ({
      characters: [...prevState.characters, newCharacter],
    }));
  };

  render() {
    return (
      <div>
        <h1>Tablita prueba</h1>
        <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;