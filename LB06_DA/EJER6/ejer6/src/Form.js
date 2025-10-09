import React, { Component } from 'react';

class Form extends Component {
  initialState = { name: '', sector: '', revenueUSD: '' };
  state = this.initialState;

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: name === 'revenueUSD' ? value.replace(/[^\d.]/g, '') : value });
  };

  submitForm = () => {
    const { name, sector, revenueUSD } = this.state;
    if (!name.trim() || !sector.trim() || !revenueUSD.trim()) return;
    const payload = { name: name.trim(), sector: sector.trim(), revenueUSD: Number(revenueUSD) || 0 };
    this.props.handleSubmit(payload);
    this.setState(this.initialState);
  };

  render() {
    const { name, sector, revenueUSD } = this.state;

    return (
      <div style={{ display: 'grid', gap: 12, maxWidth: 540 }}>
        <div style={{ display: 'grid', gap: 6 }}>
          <label htmlFor="name">Empresa</label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="p. ej., Alicorp"
            style={{ padding: 8, border: '1px solid #ddd', borderRadius: 6 }}
          />
        </div>

        <div style={{ display: 'grid', gap: 6 }}>
          <label htmlFor="sector">Sector</label>
          <input
            id="sector"
            name="sector"
            value={sector}
            onChange={this.handleChange}
            placeholder="p. ej., Consumo Masivo"
            style={{ padding: 8, border: '1px solid #ddd', borderRadius: 6 }}
          />
        </div>

        <div style={{ display: 'grid', gap: 6 }}>
          <label htmlFor="revenueUSD">Ingresos (USD millones)</label>
          <input
            id="revenueUSD"
            name="revenueUSD"
            value={revenueUSD}
            onChange={this.handleChange}
            placeholder="p. ej., 3000"
            inputMode="decimal"
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
