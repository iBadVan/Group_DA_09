import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      job: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,  // Esta parte sigue igual, se actualiza el estado
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, job } = this.state;
    if (name && job) {
      this.props.handleSubmit({ name, job }); // Pasa el objeto con los datos
      this.setState({ name: '', job: '' }); // Resetea el formulario después de enviar
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"  // Debe coincidir con el nombre de la propiedad en el estado
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Nombre"
        />
        <input
          type="text"
          name="job"  // Debe coincidir con el nombre de la propiedad en el estado
          value={this.state.job}
          onChange={this.handleChange}
          placeholder="Chamba"
        />
        <button type="submit">Agregar chambeador</button>
      </form>
    );
  }
}

export default Form;
