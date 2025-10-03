import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody characterData={this.props.characterData} />
      </table>
    );
  }
}

const TableHeader = () => (
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Chambita</th>
    </tr>
  </thead>
);

const TableBody = (props) => {
  return (
    <tbody>
      {props.characterData.map((character, index) => (
        <tr key={index}>
          <td>{character.name}</td>
          <td>{character.job}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default Table;
