import React, { Component } from 'react';

class Form extends Component {
  initialState = { name: '', job: '' };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitForm = () => {
    const { name, job } = this.state;

    if (!name.trim() || !job.trim()) {
      alert('Completa ambos campos (name y job).');
      return;
    }

    this.props.handleSubmit(this.state);

    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;

    return (
      <div style={{ display: 'grid', gap: 12, maxWidth: 480 }}>
        <div style={{ display: 'grid', gap: 6 }}>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="e.g., Ada Lovelace"
            style={{ padding: 8, border: '1px solid #ddd', borderRadius: 6 }}
          />
        </div>

        <div style={{ display: 'grid', gap: 6 }}>
          <label htmlFor="job">Trabajo</label>
          <input
            id="job"
            name="job"
            value={job}
            onChange={this.handleChange}
            placeholder="e.g., Ingeniera de Software"
            style={{ padding: 8, border: '1px solid #ddd', borderRadius: 6 }}
          />
        </div>

        {/* c) input type=button que dispara submitForm */}
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