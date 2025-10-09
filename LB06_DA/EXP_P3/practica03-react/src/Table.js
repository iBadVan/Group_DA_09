import React, { Component } from 'react';

const TableHeader = () => (
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Trabajo</th>
    </tr>
  </thead>
);

const TableBody = ({ characterData }) => (
  <tbody>
    {characterData.map((row, index) => (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    ))}
  </tbody>
);

class Table extends Component {
  render() {
    const { characterData } = this.props;

    return (
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    );
  }
}

export default Table;