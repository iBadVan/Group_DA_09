import React, { Component } from 'react';
import FondoUCSM from './components/FondoUCSM';

class Api extends Component {
  state = { datos: [], cargando: true, error: null };

  async componentDidMount() {
    try {
      const url =
        'https://en.wikipedia.org/w/api.php?action=opensearch&search=React&limit=5&namespace=0&format=json&origin=*';
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const items = (resultado[1] || []).map((titulo, i) => ({
        titulo,
        enlace: resultado[3]?.[i] || '#',
      }));
      this.setState({ datos: items, cargando: false });
    } catch (e) {
      this.setState({ error: 'Error al extraer datos', cargando: false });
    }
  }

  render() {
    const { datos, cargando, error } = this.state;

    return (
      <FondoUCSM>
        <h1>Resultados de Wikipedia: “React”</h1>
        {cargando && <p>Cargando...</p>}
        {error && <p>{error}</p>}
        {!cargando && !error && (
          <ul style={{ textAlign: 'left' }}>
            {datos.map((item, idx) => (
              <li key={idx}>
                <a href={item.enlace} target="_blank" rel="noreferrer" style={{ color: '#4dd0e1' }}>
                  {item.titulo}
                </a>
              </li>
            ))}
          </ul>
        )}
      </FondoUCSM>
    );
  }
}

export default Api;
