// src/Form.js
import React, { Component } from 'react';

class Formulario extends Component {
  estadoInicial = { nombre: '', trabajo: 'Desarrollador / Profesor', grado: '', avatar: '' };
  state = this.estadoInicial;

  manejarCambio = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  enviar = () => {
    this.props.manejarEnvio(this.state);
    this.setState(this.estadoInicial);
  };

  render() {
    const { nombre, trabajo, grado, avatar } = this.state;

    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="nombre">Nombre completo</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Ej: Ángel Montesinos Murillo"
          value={nombre}
          onChange={this.manejarCambio}
        />

        <label htmlFor="grado">Grado (Mag., Dr., Dra., etc.)</label>
        <input
          id="grado"
          name="grado"
          type="text"
          placeholder="Ej: Mag."
          value={grado}
          onChange={this.manejarCambio}
        />

        <label htmlFor="trabajo">Trabajo o rol</label>
        <input
          id="trabajo"
          name="trabajo"
          type="text"
          placeholder="Desarrollador / Profesor"
          value={trabajo}
          onChange={this.manejarCambio}
        />

        <label htmlFor="avatar">Avatar (URL pública o /avatars/archivo.png)</label>
        <input
          id="avatar"
          name="avatar"
          type="text"
          placeholder="/avatars/angel.png"
          value={avatar}
          onChange={this.manejarCambio}
        />

        <input type="button" value="Agregar" onClick={this.enviar} />
      </form>
    );
  }
}

export default Formulario;
