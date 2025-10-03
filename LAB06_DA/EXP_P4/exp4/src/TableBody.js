import React from 'react';

const TableBody = (props) => {
  const { characterData, removeCharacter } = props;

  return (
    <tbody>
      {characterData.map((character, index) => (
        <tr key={index}>
          <td>{character.name}</td>
          <td>{character.job}</td>
          <td>
            <button onClick={() => removeCharacter(index)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
