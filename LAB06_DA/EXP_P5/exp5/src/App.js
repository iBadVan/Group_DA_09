import React, { Component } from 'react';
import './styles.css';  // Aquí puedes agregar los estilos que quieras

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extract: '',
      error: ''
    };
  }

  componentDidMount() {
    // Hacer la solicitud al backend (servidor Express)
    fetch('http://localhost:5000/wikipedia')
      .then(response => response.json())
      .then(data => {
        this.setState({ extract: data.extract });
      })
      .catch(error => {
        this.setState({ error: 'Error al obtener los datos de Wikipedia' });
      });
  }

  render() {
    const { extract, error } = this.state;
    return (
      <div className="App">
        <h1>Extracto de Wikipedia sobre la Universidad Católica de Santa María</h1>
        {error ? (
          <p>{error}</p>
        ) : (
          <div>
            <p>{extract}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
