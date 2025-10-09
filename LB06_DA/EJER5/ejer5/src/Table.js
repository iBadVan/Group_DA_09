import React, { Component } from 'react';

const TableHeader = () => (
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Enfoque / Línea</th>
      <th style={{ width: 120 }}>Acciones</th>
    </tr>
  </thead>
);

const TableBody = ({ characterData, removeCharacter }) => (
  <tbody>
    {characterData.map((row, index) => (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.focus}</td>
        <td>
          <button
            onClick={() => removeCharacter(index)}
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
    const { characterData, removeCharacter } = this.props;
    return (
      <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid #e5e5e5' }}>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    );
  }
}

export default Table;
