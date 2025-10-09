import React, { Component } from 'react';

const TableHeader = () => (
  <thead>
    <tr>
      <th>Empresa</th>
      <th>Sector</th>
      <th>Ingresos (USD M)</th>
      <th style={{ width: 120 }}>Acciones</th>
    </tr>
  </thead>
);

const TableBody = ({ data, removeItem }) => (
  <tbody>
    {data.map((row, index) => (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.sector}</td>
        <td>{row.revenueUSD}</td>
        <td>
          <button
            onClick={() => removeItem(index)}
            style={{
              padding: '6px 10px',
              cursor: 'pointer',
              border: '1px solid #ddd',
              borderRadius: 6,
              background: '#fef2f2',
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
);

class Table extends Component {
  render() {
    const { data, removeItem } = this.props;
    return (
      <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid #e5e5e5' }}>
        <TableHeader />
        <TableBody data={data} removeItem={removeItem} />
      </table>
    );
  }
}

export default Table;
