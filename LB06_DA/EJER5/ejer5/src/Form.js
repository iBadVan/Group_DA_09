import React, { Component } from 'react';

class Form extends Component {
  initialState = { name: '', focus: '' };
  state = this.initialState;

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitForm = () => {
    const { name, focus } = this.state;
    if (!name.trim() || !focus.trim()) return;
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, focus } = this.state;
    return (
      <div style={{ display: 'grid', gap: 12, maxWidth: 520 }}>
        <div style={{ display: 'grid', gap: 6 }}>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="p. ej., Andrea Huamán"
            style={{ padding: 8, border: '1px solid #ddd', borderRadius: 6 }}
          />
        </div>
        <div style={{ display: 'grid', gap: 6 }}>
          <label htmlFor="focus">Enfoque / Línea</label>
          <input
            id="focus"
            name="focus"
            value={focus}
            onChange={this.handleChange}
            placeholder="p. ej., IA y Ciencia de Datos"
            style={{ padding: 8, border: '1px solid #ddd', borderRadius: 6 }}
          />
        </div>
        <input
          type="button"
          value="Agregar"
          onClick={this.submitForm}
          style={{
            padding: '10px 14px',
            cursor: 'pointer',
            border: '1px solid #ddd',
            borderRadius: 8,
            background: '#eef6ff',
          }}
        />
      </div>
    );
  }
}

export default Form;
