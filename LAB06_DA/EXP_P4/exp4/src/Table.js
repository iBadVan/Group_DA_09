import React, { Component } from 'react';
import TableBody from './TableBody';

class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Chambita</th>
            <th>Acciones</th> {}
          </tr>
        </thead>
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    );
  }
}

export default Table;
