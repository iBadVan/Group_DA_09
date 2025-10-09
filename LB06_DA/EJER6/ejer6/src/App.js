import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    companies: [
      { name: 'Credicorp (BCP)', sector: 'Finanzas', revenueUSD: 6000 },
      { name: 'Alicorp', sector: 'Consumo Masivo', revenueUSD: 3000 },
      { name: 'Gloria', sector: 'Lácteos y Alimentos', revenueUSD: 2000 },
      { name: 'Intercorp', sector: 'Conglomerado', revenueUSD: 4500 },
      { name: 'Backus & Johnston', sector: 'Bebidas', revenueUSD: 1800 },
      { name: 'AJE Group', sector: 'Bebidas', revenueUSD: 1500 },
      { name: 'Ferreycorp', sector: 'Maquinaria e Industria', revenueUSD: 1600 },
      { name: 'Compañía de Minas Buenaventura', sector: 'Minería', revenueUSD: 1200 },
    ],
  };

  removeCompany = (index) => {
    this.setState((prev) => ({
      companies: prev.companies.filter((_, i) => i !== index),
    }));
  };

  handleSubmit = (newCompany) => {
    this.setState((prev) => ({
      companies: [...prev.companies, newCompany],
    }));
  };

  render() {
    const { companies } = this.state;

    return (
      <div style={{ maxWidth: 900, margin: '40px auto', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
        <h1>Actividad 4 — Ejercicio 2 (Empresas peruanas reconocidas)</h1>
        <p>
          Flujo: <code>App(state)</code> → <code>Table</code> → <code>TableBody</code>. <code>Form</code> agrega registros al estado.
        </p>
        <Table data={companies} removeItem={this.removeCompany} />
        <h2 style={{ marginTop: 28 }}>Agregar empresa</h2>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
