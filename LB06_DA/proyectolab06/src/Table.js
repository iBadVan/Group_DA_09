// src/Table.js
import React, { Component } from 'react';

const estiloAvatar = { width: 40, height: 40, objectFit: 'cover', borderRadius: '50%' };

const EncabezadoTabla = () => (
  <thead>
    <tr>
      <th>Foto</th>
      <th>Nombre</th>
      <th>Grado</th>
      <th>Trabajo</th>
      <th>Acciones</th>
    </tr>
  </thead>
);

const CuerpoTabla = ({ datosPersonajes, eliminarPersonaje }) => (
  <tbody>
    {datosPersonajes.map((item, indice) => (
      <tr key={indice}>
        <td><img src={item.avatar} alt={item.nombre} style={estiloAvatar} /></td>
        <td>{item.nombre}</td>
        <td>{item.grado || '—'}</td>
        <td>{item.trabajo}</td>
        <td><button onClick={() => eliminarPersonaje(indice)}>Eliminar</button></td>
      </tr>
    ))}
  </tbody>
);

class Tabla extends Component {
  render() {
    const { datosPersonajes, eliminarPersonaje } = this.props;
    return (
      <table>
        <EncabezadoTabla />
        <CuerpoTabla datosPersonajes={datosPersonajes} eliminarPersonaje={eliminarPersonaje} />
      </table>
    );
  }
}

export default Tabla;
